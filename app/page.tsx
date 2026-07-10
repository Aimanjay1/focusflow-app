"use client";
import { useState } from "react";
import { ChartData } from "@/components/dashboard/ChartData";
import { ProgressBar } from "@/components/dashboard/ProgressBar";
import { TypeLabel } from "@/components/dashboard/TypeLabel";
import { StatWidget } from "@/components/dashboard/StatWidget";

const dashboardStats = [
  { id: 1, title: "Tasks Completed", value: 42 },
  { id: 2, title: "Focus Sessions", value: 15 },
  { id: 3, title: "Time Saved", value: "3h 20m" },
];

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
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <button
            type="button"
            className="bg-primary text-on-primary p-2 rounded"
            onClick={() => handleTabClick("Overview")}
          >
            <h2>{stats}</h2>
          </button>
        </div>

        <div className="flex gap-5">
          <div>
            {stats === "Overview" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {statWidget}
              </div>
            )}
            <div className="mt-6">
              <h2>Task Types</h2>
            </div>
            <div className="flex gap-4 mt-2">
              <TypeLabel type="all active" />
              <TypeLabel type="work" />
              <TypeLabel type="study" />
              <TypeLabel type="personal" />
            </div>
          </div>
          <div>
            <ProgressBar />
          </div>
        </div>

        <div className="mt-6">
          <h2>Weekly Task Chart</h2>
        </div>
        <ChartData />
      </div>
    </>
  );
}
