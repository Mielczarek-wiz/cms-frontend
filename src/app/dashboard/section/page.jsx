"use client";
import AddButton from "@/components/dashboardSide/AddButton";
import PageComponent from "@/components/dashboardSide/PageComponent";
import { TableDash } from "@/components/dashboardSide/TableDash";
import FormPopup from "@/components/dashboardSide/forms/FormPopup";
import { useState } from "react";

export default function Sections() {
  const header = ["ID", "Text", "Title", "Subtitle", "Type", "User", "Hidden"];
  const rows = [
    {
      id: "1",
      text: "text1",
      title: "title1",
      subtitle: "subtitle1",
      type: "type1",
      user: "User1",
      hidden: true,
    },
    {
      id: "2",
      text: "text2",
      title: "title2",
      subtitle: "subtitle2",
      type: "type2",
      user: "User2",
      hidden: true,
    },
    {
      id: "3",
      text: "text3",
      title: "title3",
      subtitle: "subtitle3",
      type: "type3",
      user: "User3",
      hidden: false,
    },
    {
      id: "4",
      text: "text4",
      title: "title4",
      subtitle: "subtitle4",
      type: "type2",
      user: "User4",
      hidden: true,
    },
    {
      id: "44",
      text: "text4",
      title: "title4",
      subtitle: "subtitle4",
      type: "type1",
      user: "User5",
      hidden: true,
    },
    {
      id: "5",
      text: "text5",
      title: "title5",
      subtitle: "subtitle5",
      type: "type3",
      user: "User6",
      hidden: false,
    },
    {
      id: "6",
      text: "text6",
      title: "title6",
      subtitle: "subtitle6",
      type: "type2",
      user: "User7",
      hidden: true,
    },
    {
      id: "7",
      text: "text7",
      title: "title7",
      subtitle: "subtitle7",
      type: "type1",
      user: "User8",
      hidden: true,
    },
    {
      id: "8",
      text: "text8",
      title: "title8",
      subtitle: "subtitle8",
      type: "type3",
      user: "User9",
      hidden: false,
    },
  ];
  return <PageComponent form={"Sections"} header={header} initialRows={rows} />;
}
