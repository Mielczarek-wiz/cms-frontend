import { TableDash } from "@/components/dashboardSide/TableDash";

export default function Infobox() {
  const header = ["ID", "Information", "Subinformation", "User", "Hidden"];
  const rows = [
    {
      id: "1",
      information: "Hej1",
      subinformation: "subinformation1",
      user: "user1",
      hidden: true,
    },
    {
      id: "2",
      information: "Hej2",
      subinformation: "subinformation2",
      user: "user2",
      hidden: true,
    },
    {
      id: "3",
      information: "Hej3",
      subinformation: "subinformation3",
      user: "user3",
      hidden: false,
    },
    {
      id: "4",
      information: "Hej4",
      subinformation: "subinformation4",
      user: "user4",
      hidden: false,
    },
    {
      id: "5",
      information: "Hej5",
      subinformation: "subinformation5",
      user: "user5",
      hidden: false,
    },
    {
      id: "6",
      information: "Hej6",
      subinformation: "subinformation6",
      user: "user6",
      hidden: true,
    },
    {
      id: "7",
      information: "Hej7",
      subinformation: "subinformation7",
      user: "user7",
      hidden: true,
    },
    {
      id: "8",
      information: "Hej8",
      subinformation: "subinformation8",
      user: "user8",
      hidden: true,
    },
    {
      id: "9",
      information: "Hej9",
      subinformation: "subinformation9",
      user: "user9",
      hidden: true,
    },
  ];
  return <TableDash header={header} rows={rows} form="Infoboxes" />;
}
