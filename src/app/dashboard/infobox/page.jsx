"use client";
import PageComponent from "@/components/dashboardSide/PageComponent";

export default function Infobox() {
  const header = ["ID", "Information", "Subinformation", "Icon", "User", "Hidden"];

  return (
    <PageComponent form={"Infoboxes"} header={header} initialRows={[]} />
  );
}
