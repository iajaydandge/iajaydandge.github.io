// @see https://docs.astro.build/en/guides/endpoints/#static-file-endpoints
// @see https://github.com/iajaydandge/iajaydandge.github.io/blob/main/AGENTS.md

import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import satori from "satori";
import { initWasm, Resvg } from "@resvg/resvg-wasm";
import fs from "node:fs/promises";
import path from "node:path";

export const prerender = true;

const width = 1200;
const height = 630;

let wasmInitialized = false;
let fontDataCache: Buffer | null = null;

async function getWasm() {
  if (!wasmInitialized) {
    const wasmPath = path.resolve("./node_modules/@resvg/resvg-wasm/index_bg.wasm");
    const wasmBuffer = await fs.readFile(wasmPath);
    await initWasm(wasmBuffer);
    wasmInitialized = true;
  }
}

async function getFont(): Promise<Buffer> {
  if (!fontDataCache) {
    const fontPath = path.resolve(
      "./node_modules/@fontsource/geist-sans/files/geist-sans-latin-500-normal.woff"
    );
    fontDataCache = await fs.readFile(fontPath);
  }
  return fontDataCache;
}

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  const paths = posts.map((post) => ({
    params: { slug: post.id.replace(/\.mdx$/, "") },
    props: { title: post.data.title },
  }));

  paths.push({
    params: { slug: "home" },
    props: { title: "Ajay Dandge" },
  });

  return paths;
}

export async function GET(context: APIContext) {
  await getWasm();
  const fontData = await getFont();
  const { title } = context.props as { title: string };

  // Exact markup from original app/blog/og-image.tsx
  const markup = {
    type: "div",
    props: {
      tw: "flex flex-col w-full h-full items-center justify-center bg-white",
      children: {
        type: "div",
        props: {
          tw: "flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8",
          children: {
            type: "h2",
            props: {
              tw: "text-4xl font-medium tracking-tight text-left text-black",
              children: title,
            },
          },
        },
      },
    },
  };

  const svg = await satori(markup as any, {
    width,
    height,
    fonts: [
      {
        name: "Geist",
        data: fontData,
        weight: 500,
        style: "normal",
      },
    ],
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: width },
  });

  const pngBuffer = resvg.render().asPng();

  return new Response(pngBuffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
