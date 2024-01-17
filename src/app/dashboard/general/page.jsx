"use client";
import AddButton from "@/components/dashboardSide/AddButton";
import { TableDash } from "@/components/dashboardSide/TableDash";
import FormPopup from "@/components/dashboardSide/forms/FormPopup";
import { useState } from "react";

export default function Generals() {
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
  const header = ["ID", "Key", "Value", "Description", "User", "Hidden"];
  const rows = [
    {
      id: "1",
      key: "Hej1",
      value: "hej",
      description: "hello@o2.pl",
      user: "user6",
      hidden: true,
    },
    {
      id: "2",
      key: "Hej2",
      value: "hej",
      description: "hello@o2.pl",
      user: "user1",
      hidden: true,
    },
    {
      id: "3",
      key: "Hej3",
      value: "hej",
      description: "hello@o2.pl",
      user: "user1",
      hidden: false,
    },
    {
      id: "4",
      key: "Hej4",
      value: "hej",
      description: "hello@o2.pl",
      user: "user1",
      hidden: true,
    },
    {
      id: "5",
      key: "Hej5",
      value: "hej",
      description: "hello@o2.pl",
      user: "user5",
      hidden: true,
    },
    {
      id: "6",
      key: "Hej6",
      value: "hej",
      description: "hello@o2.pl",
      user: "user1",
      hidden: true,
    },
    {
      id: "7",
      key: "Hej7",
      value: "hej",
      description: "hello@o2.pl",
      user: "user1",
      hidden: true,
    },
    {
      id: "8",
      key: "Hej8",
      value: "hej",
      description: "hello@o2.pl",
      user: "user1",
      hidden: true,
    },
    {
      id: "9",
      key: "Hej9",
      value: "hej",
      description: "hello@o2.pl",
      user: "user3",
      hidden: false,
    },
    {
      id: "10",
      key: "Hej10",
      value: "hej",
      description: "hello@o2.pl",
      user: "user1",
      hidden: true,
    },
    {
      id: "11",
      key: "Hej11",
      value: "hej",
      description: "hello@o2.pl",
      user: "user1",
      hidden: true,
    },
    {
      id: "12",
      key: "Hej12",
      value: "hej",
      description: "hello@o2.pl",
      user: "user1",
      hidden: true,
    },
    {
      id: "13",
      key: "Hej13",
      value: "hej",
      description: "hello@o2.pl",
      user: "user4",
      hidden: true,
    },
    {
      id: "14",
      key: "Hej14",
      value: "hej",
      description: "hello@o2.pl",
      user: "user1",
      hidden: true,
    },
    {
      id: "15",
      key: "Hej15",
      value: "hej",
      description: "hello@o2.pl",
      user: "user1",
      hidden: true,
    },
    {
      id: "16",
      key: "Hej16",
      value: "hej",
      description: "hello@o2.pl",
      user: "user2",
      hidden: false,
    },
    {
      id: "17",
      key: "Hej17",
      value: "hej",
      description: "hello@o2.pl",
      user: "user1",
      hidden: true,
    },
    {
      id: "18",
      key: "Hej18",
      value: "hej",
      description: "hello@o2.pl",
      user: "user1",
      hidden: true,
    },
    {
      id: "19",
      key: "Hej19",
      value: "hej",
      description: "hello@o2.pl",
      user: "user3",
      hidden: false,
    },
    {
      id: "20",
      key: "Hej20",
      value: "hej",
      description: "hello@o2.pl",
      user: "user1",
      hidden: true,
    },
  ];
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
          form={"Generals"}
          item={popUp.item}
          handleAddAndModify={handleAddAndModify}
        />
      ) : null}
    </>
  );
}
