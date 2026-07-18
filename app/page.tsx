import { ChartData } from "@/components/dashboard/ChartData";
import { ProgressBar } from "@/components/dashboard/ProgressBar";
import { DashboardCards } from "@/components/DashboardCards";
import { TypeLabel } from "@/components/dashboard/TypeLabel";
import { DataTable } from "@/components/data-table";
import data from "./data.json";

const dashboardStats = [
  { id: 1, title: "Tasks Completed", value: 42 },
  { id: 2, title: "Focus Sessions", value: 15 },
  { id: 3, title: "Time Saved", value: "3h 20m" },
  { id: 4, title: "Projects", value: 5 },
];

export default function Home() {
  return (
    <div className="p-6">
      <DashboardCards stats={dashboardStats} />
      <div className="flex gap-4 mt-6 items-baseline justify-around">
        <ChartData />
      </div>
      <div className="flex gap-5">
        <DataTable data={data} />
      </div>
    </div>
  );
}
