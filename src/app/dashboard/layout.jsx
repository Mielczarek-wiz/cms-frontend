"use client";
import DashboardLayout from "@/components/dashboardSide/DashboardLayout";
import { useState } from "react";
import { navigation } from "./routes/navigation";
import WithAuth from "@/components/dashboardSide/HOC/withAuth";
import AddButton from "@/components/dashboardSide/AddButton";

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
      <main className="py-8 mx-auto h-fit max-w-7xl sm:px-6 lg:px-8">
        <AddButton form={current} />
        {children}
      </main>
    </WithAuth>
  );
}
