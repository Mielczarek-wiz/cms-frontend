"use client";
import AddButton from "@/components/dashboardSide/AddButton";
import PageComponent from "@/components/dashboardSide/PageComponent";
import { TableDash } from "@/components/dashboardSide/TableDash";
import FormPopup from "@/components/dashboardSide/forms/FormPopup";
import { useState } from "react";

export default function Sections() {
  const header = ["ID", "Title", "Subtitle", "Text", "Image", "Type", "Infoboxes", "User", "Hidden"];
  return <PageComponent form={"Sections"} header={header} initialRows={[]} />;
}
