"use client";
import PageComponent from "@/components/dashboardSide/PageComponent";

export default function Slider() {
  const header = ["ID", "Title", "Subtitle", "Text", "Photo", "User", "Hidden"];

  return <PageComponent form={"Sliders"} header={header} initialRows={[]} />;
}
