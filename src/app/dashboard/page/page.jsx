"use client";
import PageComponent from "@/components/dashboardSide/PageComponent";

export default function Pages() {
  const header = ["ID", "Name", "Link", "Page", "User", "Hidden"];
  return <PageComponent form={"Pages"} header={header} initialRows={[]} />;
}
