export default function SectionSkeleton({ height = 420 }: { height?: number }) {
  return (
    <div
      className="animate-pulse rounded-2xl bg-neutral-100 dark:bg-neutral-800"
      style={{ minHeight: height }}
    />
  );
}