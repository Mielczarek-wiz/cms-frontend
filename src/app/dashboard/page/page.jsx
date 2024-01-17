"use client";
import AddButton from "@/components/dashboardSide/AddButton";
import { TableDash } from "@/components/dashboardSide/TableDash";
import FormPopup from "@/components/dashboardSide/forms/FormPopup";
import { useState } from "react";

export default function Pages() {
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
  const header = ["ID", "Name", "Link", "Page", "User", "Hidden"];
  const rows = [
    {
      id: "1",
      name: "Hej1",
      link: "#",
      page: "page7",
      user: "user8",
      hidden: true,
    },
    {
      id: "2",
      name: "Hej2",
      link: "#",
      page: "page1",
      user: "user1",
      hidden: true,
    },
    {
      id: "3",
      name: "Hej3",
      link: "#",
      page: "page3",
      user: "user2",
      hidden: false,
    },
    {
      id: "4",
      name: "Hej4",
      link: "#",
      page: "page1",
      user: "user1",
      hidden: true,
    },
    {
      id: "5",
      name: "Hej5",
      link: "#",
      page: "page1",
      user: "user1",
      hidden: true,
    },
    {
      id: "6",
      name: "Hej6",
      link: "#",
      page: "page1",
      user: "user2",
      hidden: true,
    },
    {
      id: "7",
      name: "Hej7",
      link: "#",
      page: "page5",
      user: "user4",
      hidden: true,
    },
    {
      id: "8",
      name: "Hej8",
      link: "#",
      page: "page1",
      user: "user1",
      hidden: true,
    },
    {
      id: "9",
      name: "Hej9",
      link: "#",
      page: "page6",
      user: "user1",
      hidden: false,
    },
    {
      id: "10",
      name: "Hej10",
      link: "#",
      page: "page1",
      user: "user4",
      hidden: true,
    },
    {
      id: "11",
      name: "Hej11",
      link: "#",
      page: "page2",
      user: "user4",
      hidden: true,
    },
    {
      id: "12",
      name: "Hej12",
      link: "#",
      page: "page1",
      user: "user1",
      hidden: true,
    },
    {
      id: "13",
      name: "Hej13",
      link: "#",
      page: "page3",
      user: "user1",
      hidden: true,
    },
    {
      id: "14",
      name: "Hej14",
      link: "#",
      page: "page1",
      user: "user2",
      hidden: true,
    },
    {
      id: "15",
      name: "Hej15",
      link: "#",
      page: "page1",
      user: "user1",
      hidden: true,
    },
    {
      id: "16",
      name: "Hej16",
      link: "#",
      page: "page6",
      user: "user1",
      hidden: false,
    },
    {
      id: "17",
      name: "Hej17",
      link: "#",
      page: "page1",
      user: "user4",
      hidden: true,
    },
    {
      id: "18",
      name: "Hej18",
      link: "#",
      page: "page1",
      user: "user1",
      hidden: true,
    },
    {
      id: "19",
      name: "Hej19",
      link: "#",
      page: "page9",
      user: "user1",
      hidden: false,
    },
    {
      id: "20",
      name: "Hej20",
      link: "#",
      page: "page1",
      user: "user5",
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
          form={"Pages"}
          item={popUp.item}
          handleAddAndModify={handleAddAndModify}
        />
      ) : null}
    </>
  );
}
