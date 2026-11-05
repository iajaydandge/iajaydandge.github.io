import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Pet } from "@/components/pet";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import "@/global.css";
import { baseUrl } from "@/sitemap";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Ajay Dandge",
    template: "%s — Ajay Dandge",
  },
  description:
    "Personal corner of the internet. Building software, exploring ideas, writing, and keeping what's interesting.",
  openGraph: {
    title: "Ajay Dandge",
    description:
      "Personal corner of the internet. Building software, exploring ideas, writing, and keeping what's interesting.",
    url: baseUrl,
    siteName: "Ajay Dandge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ajay Dandge",
    description:
      "Personal corner of the internet. Building software, exploring ideas, writing, and keeping what's interesting.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const navItems = {
  "/": {
    name: "home",
  },
  "/writing": {
    name: "writing",
  },
  "/library": {
    name: "library",
  },
  // "/sketchbook": {
  //   name: "sketchbook",
  // },
  "/about": {
    name: "about",
  },
};

function Navbar() {
  return (
    <aside className="mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex items-center justify-between relative px-0 pb-0"
          id="nav"
        >
          <div className="flex items-center gap-1 sm:gap-2 -ml-2">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-colors hover:text-neutral-800 dark:hover:text-neutral-200 py-1 px-2 text-sm font-medium"
                >
                  {name}
                </Link>
              );
            })}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="mt-16 mb-12 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-2 text-xs text-neutral-500 dark:text-neutral-400">
      <p>© {new Date().getFullYear()} MIT Licensed</p>
      <div className="flex items-center gap-4">
        <a
          href="/rss"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center hover:underline underline-offset-4 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          <span>rss</span>
          <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
        </a>
      </div>
    </footer>
  );
}

const cx = (...classes: (string | boolean | undefined)[]) =>
  classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(
        "bg-background text-foreground",
        GeistSans.variable,
        GeistMono.variable,
        GeistSans.className
      )}
    >
      <body className="antialiased max-w-xl mx-4 sm:mx-auto mt-8">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Pet />
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3V3L4N4VS7"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3V3L4N4VS7');
        `}
      </Script>
    </html>
  );
}
