"use client";
import PageComponent from "@/components/dashboardSide/PageComponent";

export default function Slider() {
  const header = ["ID", "Text", "Title", "User", "Hidden"];

  return <PageComponent form={"Sliders"} header={header} initialRows={[]} />;
}
