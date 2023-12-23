"use client";
import DashboardLayout from "@/components/dashboardSide/DashboardLayout";
import { useState } from "react";
import { navigation } from "./routes/navigation";
import WithAuth from "@/components/dashboardSide/HOC/withAuth";

export default function Layout({ children }) {
  const [current, setCurrent] = useState(navigation[0].name);
  return (
    <WithAuth>
      <DashboardLayout current={current} setCurrent={setCurrent} />
      <header className="border-b shadow bg-slate-800 border-slate-500">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            {current}
          </h1>
        </div>
      </header>
      <main className=" bg-slate-600">
        <div className="py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
      </main>
    </WithAuth>
  );
}
