import Link from "next/link";

export default function NotFound() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100">
        404 — Page not found
      </h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        Whatever was here isn&apos;t anymore — maybe it moved, was rewritten,
        or never existed in the first place.
      </p>
      <div className="pt-2">
        <Link
          href="/"
          className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 underline underline-offset-4"
        >
          ← Back to home
        </Link>
      </div>
    </section>
  );
}
