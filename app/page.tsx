"use client";
import { useState } from "react";
import { ChartData } from "@/components/dashboard/ChartData";
import { ProgressBar } from "@/components/dashboard/ProgressBar";

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

      <ProgressBar />
      <ChartData />
    </>
  );
}
