export const metadata = {
  title: "Sketchbook",
  description:
    "Random drawings, little experiments, and things I felt like making.",
};

export default function SketchbookPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-2 tracking-tighter">
        Sketchbook
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-8">
        Random drawings, little experiments, and things I felt like making.
      </p>

      <div className="py-12 border-y border-dashed border-neutral-200 dark:border-neutral-800 text-center">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Nothing as of now, still creating.
        </p>
      </div>

      <p className="text-xs text-neutral-400 dark:text-neutral-500 italic mt-6">
        Not everything here needs to be finished. That&apos;s kind of the point.
      </p>
    </section>
  );
}
