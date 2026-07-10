"use client";
import { Label } from "@/components/ui/label";

const typeLabels = [
  { id: 1, type: "all active", label: "All active", total: 0 },
  { id: 2, type: "work", label: "Work", total: 0 },
  { id: 3, type: "study", label: "Study", total: 0 },
  { id: 4, type: "personal", label: "Personal", total: 0 },
];

export function TypeLabel({ type }: { type: string }) {
  const typeLabel = typeLabels.find((item) => item.type === type);
  if (!typeLabel) {
    return null; // Return null if the type is not found
  }
  return (
    <Label
      className={`px-2 py-1 rounded text-xs font-medium ${
        type === "all active"
          ? "bg-cyan-500 text-on-background"
          : type === "work"
            ? "bg-amber-500 text-on-background"
            : type === "study"
              ? "bg-green-500 text-on-background"
              : type === "personal"
                ? "bg-purple-500 text-on-background"
                : ""
      }` }
    >
      {typeLabel.label} ({typeLabel.total})
    </Label>
  );
}
