"use client";
export function StatWidget({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="bg-surface-container-low p-4 rounded-lg shadow-md">
      <h3 className="text-label-md text-on-surface-variant">{title}</h3>
      <p className="text-headline-sm text-on-surface">{value}</p>
    </div>
  );
}
