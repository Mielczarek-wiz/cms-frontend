"use client";
import DisclosureDashboard from "@/components/dashboardSide/DisclosureDashboard";
import { useState } from "react";
import { navigation } from "./routes/navigation";

export default function Layout({ children }) {
  const [current, setCurrent] = useState(navigation[0].name);
  return (
    <>
      <DisclosureDashboard current={current} setCurrent={setCurrent} />
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
    </>
  );
}
