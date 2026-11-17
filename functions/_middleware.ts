// @see https://developers.cloudflare.com/pages/functions/middleware/
// @see https://tools.ietf.org/html/rfc8288
// @see https://github.com/iajaydandge/iajaydandge.github.io/blob/main/AGENTS.md

interface EventContext {
  request: Request;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
}

export async function onRequest(context: EventContext): Promise<Response> {
  const { request, next } = context;
  const url = new URL(request.url);
  const acceptHeader = request.headers.get("Accept") || "";

  // 1. Content Negotiation: Check if client requested Markdown
  const wantsMarkdown =
    acceptHeader.includes("text/markdown") ||
    acceptHeader.includes("text/x-markdown");

  // If requesting a clean route with Accept: text/markdown, rewrite to paired .md route
  if (wantsMarkdown && !url.pathname.endsWith(".md") && !url.pathname.includes(".")) {
    let mdPath = url.pathname.replace(/\/$/, "");
    if (mdPath === "") {
      mdPath = "/index";
    }
    const targetUrl = new URL(`${mdPath}.md`, request.url);
    const mdResponse = await context.next(targetUrl.toString());

    if (mdResponse.status === 200) {
      const headers = new Headers(mdResponse.headers);
      headers.set("Content-Type", "text/markdown; charset=utf-8");
      headers.set("Vary", "Accept");
      headers.set("Link", '</llms.txt>; rel="describedby"');
      return new Response(mdResponse.body, {
        status: 200,
        headers,
      });
    }
  }

  // 2. Fetch standard response
  const response = await next();

  // 3. Bot-aware agent-friendly 404 handling
  if (response.status === 404 && (wantsMarkdown || url.pathname.endsWith(".md"))) {
    const notFoundMd = await context.next(new URL("/404.md", request.url).toString());
    if (notFoundMd.status === 200 || notFoundMd.status === 404) {
      const headers = new Headers(notFoundMd.headers);
      headers.set("Content-Type", "text/markdown; charset=utf-8");
      headers.set("Vary", "Accept");
      headers.set("Link", '</llms.txt>; rel="describedby"');
      return new Response(notFoundMd.body, {
        status: 404,
        headers,
      });
    }
  }

  // 4. Attach RFC 8288 Link header & Vary: Accept to HTML and Markdown responses
  const contentType = response.headers.get("Content-Type") || "";
  if (
    contentType.includes("text/html") ||
    contentType.includes("text/markdown") ||
    url.pathname.endsWith(".md")
  ) {
    const headers = new Headers(response.headers);
    headers.set("Link", '</llms.txt>; rel="describedby"');
    headers.set("Vary", "Accept");
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }

  return response;
}
