"use client";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";

const chartWeeklyData = [
  { day: "Mon", todo: 30, doing: 20, done: 10 },
  { day: "Tue", todo: 45, doing: 15, done: 20 },
  { day: "Wed", todo: 20, doing: 10, done: 15 },
  { day: "Thu", todo: 60, doing: 25, done: 30 },
  { day: "Fri", todo: 50, doing: 20, done: 25 },
  { day: "Sat", todo: 70, doing: 30, done: 15 },
  { day: "Sun", todo: 40, doing: 10, done: 25 },
];

const chartConfig = {
  todo: {
    label: "To Do",
    color: "hsl(210, 70%, 50%)",
  },
  doing: {
    label: "Doing",
    color: "hsl(30, 70%, 50%)",
  },
  done: {
    label: "Done",
    color: "hsl(120, 70%, 50%)",
  },
} satisfies ChartConfig;

export function ChartData() {
  return (
    <ChartContainer config={chartConfig} className="min-h-50 w-full">
      <BarChart accessibilityLayer data={chartWeeklyData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="day" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="todo" fill="var(--color-todo)" radius={4} />
        <Bar dataKey="doing" fill="var(--color-doing)" radius={4} />
        <Bar dataKey="done" fill="var(--color-done)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
