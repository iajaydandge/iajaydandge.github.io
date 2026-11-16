"use client";

import { useEffect } from "react";

export function WebMCP() {
  useEffect(() => {
    // Only run if WebMCP browser API (document.modelContext or window.modelContext) is present
    const mc =
      (typeof document !== "undefined" &&
        (document as unknown as { modelContext?: { registerTool?: Function } }).modelContext) ||
      (typeof window !== "undefined" &&
        (window as unknown as { modelContext?: { registerTool?: Function } }).modelContext);

    if (!mc || typeof mc.registerTool !== "function") {
      return;
    }

    const controller = new AbortController();

    try {
      mc.registerTool(
        {
          name: "getRecentPosts",
          description:
            "Returns a list of recent technical engineering articles published on ajaydandge.dev.",
          inputSchema: {
            type: "object",
            properties: {
              limit: {
                type: "number",
                description: "Maximum number of articles to return (default 5)",
              },
            },
          },
          execute: async () => {
            const res = await fetch("/llms.txt");
            const text = await res.text();
            return { content: [{ type: "text", text }] };
          },
        },
        { signal: controller.signal }
      );

      mc.registerTool(
        {
          name: "getContactInfo",
          description:
            "Returns Ajay Dandge's direct contact channels, email address, timezone, and communication preferences.",
          inputSchema: { type: "object", properties: {} },
          execute: async () => {
            const res = await fetch("/contact.md");
            const text = await res.text();
            return { content: [{ type: "text", text }] };
          },
        },
        { signal: controller.signal }
      );
    } catch {
      // Gracefully ignore registration failure in non-WebMCP environments
    }

    return () => {
      controller.abort();
    };
  }, []);

  return null;
}
