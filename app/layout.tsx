import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import { Navbar } from "@/components/nav";
import { Pet } from "@/components/pet";
import { ThemeProvider } from "@/components/theme-provider";
import "@/global.css";
import { baseUrl } from "@/sitemap";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Ajay Dandge — Software Developer",
    template: "%s — Ajay Dandge",
  },
  description:
    "Developer blog covering software engineering, CLI tools, databases, authentication, and LLMs. Written by Ajay Dandge.",
  openGraph: {
    title: "Ajay Dandge — Software Developer",
    description:
      "Developer blog covering software engineering, CLI tools, databases, authentication, and LLMs. Written by Ajay Dandge.",
    url: baseUrl,
    siteName: "Ajay Dandge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ajay Dandge — Software Developer",
    description:
      "Developer blog covering software engineering, CLI tools, databases, authentication, and LLMs. Written by Ajay Dandge.",
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

const cx = (...classes) => classes.filter(Boolean).join(" ");

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
        GeistSans.className
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
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
