import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import { GeistMono } from "geist/font/mono";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import powershell from "highlight.js/lib/languages/powershell";
import ini from "highlight.js/lib/languages/ini";
import plaintext from "highlight.js/lib/languages/plaintext";
import csharp from "highlight.js/lib/languages/csharp";
import typescript from "highlight.js/lib/languages/typescript";
import http from "highlight.js/lib/languages/http";
import python from "highlight.js/lib/languages/python";
import toml from "highlight.js/lib/languages/ini";
import yaml from "highlight.js/lib/languages/yaml";
import json from "highlight.js/lib/languages/json";
import dockerfile from "highlight.js/lib/languages/dockerfile";

import remarkGfm from "remark-gfm";
import "highlight.js/styles/github-dark.css";

hljs.registerLanguage("bash", bash);
hljs.registerLanguage("powershell", powershell);
hljs.registerLanguage("ini", ini);
hljs.registerLanguage("plaintext", plaintext);
hljs.registerLanguage("csharp", csharp);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("http", http);
hljs.registerLanguage("python", python);
hljs.registerLanguage("toml", toml);
hljs.registerLanguage("yaml", yaml);
hljs.registerLanguage("json", json);
hljs.registerLanguage("dockerfile", dockerfile);

function Table({ data }) {
  if (!data?.headers) return null;
  let headers = data.headers.map((header, index) => (
    <th
      key={index}
      className="px-4 py-2 text-left font-semibold text-neutral-900 dark:text-neutral-100 border-r last:border-r-0 border-neutral-200 dark:border-neutral-800"
    >
      {header}
    </th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr
      key={index}
      className="border-t border-neutral-200 dark:border-neutral-800 even:bg-neutral-50/50 dark:even:bg-neutral-900/30"
    >
      {row.map((cell, cellIndex) => (
        <td
          key={cellIndex}
          className="px-4 py-2 text-neutral-700 dark:text-neutral-300 border-r last:border-r-0 border-neutral-200 dark:border-neutral-800"
        >
          {cell}
        </td>
      ))}
    </tr>
  ));

  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm">
        <thead className="bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
          <tr>{headers}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

function CustomLink(props) {
  let href = props.href;
  const linkClasses =
    "underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 decoration-[0.1em] hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={linkClasses} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a className={linkClasses} {...props} />;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={linkClasses}
      {...props}
    />
  );
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg my-6" {...props} />;
}

function Pre({ children, ...props }: any) {
  return (
    <pre
      className="bg-neutral-50 dark:bg-neutral-900 rounded-lg overflow-x-auto border border-neutral-200 dark:border-neutral-800 py-2.5 px-3 text-sm my-4 [&>code]:bg-transparent [&>code]:p-0 [&>code]:border-0"
      {...props}
    >
      {React.isValidElement(children)
        ? React.cloneElement(children as React.ReactElement<any>, { isBlock: true })
        : children}
    </pre>
  );
}

function Code({ children, isBlock, ...props }: any) {
  const isCodeBlock = Boolean(isBlock || props.className?.includes("language-"));

  if (!isCodeBlock && typeof children === "string") {
    return (
      <code
        {...props}
        className={`${GeistMono.className} text-xs px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700`}
      >
        {children}
      </code>
    );
  }

  const rawLanguage = props.className?.replace(/^language-/, "") || "plaintext";
  const language = hljs.getLanguage(rawLanguage) ? rawLanguage : "plaintext";
  const codeContent = typeof children === "string" ? children : String(children || "");
  const codeHTML = hljs.highlight(codeContent, { language }).value;

  return (
    <code
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
      className={`${GeistMono.className} text-sm`}
    />
  );
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

const headingStyles = {
  1: "text-2xl font-semibold tracking-tight mt-8 mb-3 text-neutral-900 dark:text-neutral-100",
  2: "text-xl font-medium tracking-tight mt-8 mb-2 text-neutral-900 dark:text-neutral-100",
  3: "text-lg font-medium tracking-tight mt-6 mb-2 text-neutral-900 dark:text-neutral-100",
  4: "text-base font-medium tracking-tight mt-6 mb-2 text-neutral-900 dark:text-neutral-100",
  5: "text-sm font-medium tracking-tight mt-4 mb-2 text-neutral-900 dark:text-neutral-100",
  6: "text-sm font-medium tracking-tight mt-4 mb-2 text-neutral-900 dark:text-neutral-100",
};

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug, className: headingStyles[level] },
      children
    );
  };

  Heading.displayName = `Heading${level}`;
  return Heading;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  p: (props) => (
    <p
      className="my-4 text-neutral-800 dark:text-neutral-200 leading-relaxed"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="list-disc pl-6 my-4 space-y-1 text-neutral-800 dark:text-neutral-200"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal pl-6 my-4 space-y-1 text-neutral-800 dark:text-neutral-200"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-4 my-4 italic text-neutral-700 dark:text-neutral-300"
      {...props}
    />
  ),
  pre: Pre,
  hr: (props) => (
    <hr className="my-8 border-neutral-200 dark:border-neutral-800" {...props} />
  ),
  strong: (props) => (
    <strong
      className="font-semibold text-neutral-900 dark:text-neutral-100"
      {...props}
    />
  ),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  table: (props: any) => (
    <div className="overflow-x-auto my-6 border border-neutral-200 dark:border-neutral-800 rounded-lg">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props: any) => (
    <thead
      className="bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800"
      {...props}
    />
  ),
  tbody: (props: any) => (
    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800" {...props} />
  ),
  tr: (props: any) => (
    <tr
      className="even:bg-neutral-50/50 dark:even:bg-neutral-900/30"
      {...props}
    />
  ),
  th: (props: any) => (
    <th
      className="px-4 py-2.5 text-left font-semibold text-neutral-900 dark:text-neutral-100 border-r last:border-r-0 border-neutral-200 dark:border-neutral-800"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="px-4 py-2 text-neutral-700 dark:text-neutral-300 border-r last:border-r-0 border-neutral-200 dark:border-neutral-800"
      {...props}
    />
  ),
  Table,
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [],
        },
      }}
    />
  );
}
