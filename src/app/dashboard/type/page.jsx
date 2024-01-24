"use client";
import PageComponent from "@/components/dashboardSide/PageComponent";

export default function Types() {
  const header = ["ID", "Type", "User", "Hidden"];
  return <PageComponent form={"Types"} header={header} initialRows={[]} />;
}
