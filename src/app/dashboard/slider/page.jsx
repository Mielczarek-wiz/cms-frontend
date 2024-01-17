"use client";
import AddButton from "@/components/dashboardSide/AddButton";
import { TableDash } from "@/components/dashboardSide/TableDash";
import FormPopup from "@/components/dashboardSide/forms/FormPopup";
import { useState } from "react";

export default function Slider() {
  const header = ["ID", "Text", "Title", "User", "Hidden"];
  const rows = [
    {
      id: "1",
      text: "text1",
      title: "title1",
      user: "User1",
      hidden: true,
    },
    {
      id: "2",
      text: "text2",
      title: "title2",
      user: "User2",
      hidden: true,
    },
    {
      id: "3",
      text: "text3",
      title: "title3",
      user: "User3",
      hidden: false,
    },
    {
      id: "4",
      text: "text4",
      title: "title4",
      user: "User4",
      hidden: true,
    },
    {
      id: "44",
      text: "text4",
      title: "title4",
      user: "User5",
      hidden: true,
    },
    {
      id: "5",
      text: "text5",
      title: "title5",
      user: "User6",
      hidden: false,
    },
    {
      id: "6",
      text: "text6",
      title: "title6",
      user: "User7",
      hidden: true,
    },
    {
      id: "7",
      text: "text7",
      title: "title7",
      user: "User8",
      hidden: true,
    },
    {
      id: "8",
      text: "text8",
      title: "title8",
      user: "User9",
      hidden: false,
    },
  ];
  const handleDelete = async (id) => {
    console.log(id);
  };
  const handleAddAndModify = async (data) => {
    console.log(data);
  };
  const [popUp, setPopUp] = useState({
    isOpen: false,
    item: {},
  });
  return (
    <>
      <AddButton setPopUp={setPopUp} />
      <TableDash
        header={header}
        rows={rows}
        setPopUp={setPopUp}
        handleDelete={handleDelete}
      />
      {popUp.isOpen ? (
        <FormPopup
          setPopUp={setPopUp}
          form={"Sliders"}
          item={popUp.item}
          handleAddAndModify={handleAddAndModify}
        />
      ) : null}
    </>
  );
}
