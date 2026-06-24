"use client";
import { useState } from "react";
import { Bar, BarChart } from "recharts";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

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

const dashboardStats = [
  { id: 1, title: "Tasks Completed", value: 42 },
  { id: 2, title: "Focus Sessions", value: 15 },
  { id: 3, title: "Time Saved", value: "3h 20m" },
];

function StatWidget({
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

export default function Home() {
  const [stats, setStats] = useState("Overview");
  function handleTabClick(tab: string) {
    setStats(tab);
  }

  const statWidget = dashboardStats.map((stat) => (
    <StatWidget key={stat.id} title={stat.title} value={stat.value} />
  ));
  return (
    <>
      <h1>Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <button type="button" onClick={() => handleTabClick("Overview")}>
          Overview
        </button>
      </div>
      <h2>Current Tab: {stats}</h2>

      {stats === "Overview" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {statWidget}
        </div>
      )}

      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartWeeklyData}>
          <Bar dataKey="todo" fill="var(--color-todo)" radius={4} />
          <Bar dataKey="doing" fill="var(--color-doing)" radius={4} />
          <Bar dataKey="done" fill="var(--color-done)" radius={4} />
        </BarChart>
      </ChartContainer>
    </>
  );
}
