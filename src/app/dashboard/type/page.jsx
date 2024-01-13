import { TableDash } from "@/components/dashboardSide/TableDash";

export default function Types() {
  const header = ["ID", "Type", "User", "Hidden"];
  const rows = [
    { id: "1", type: "Hej1", user: "Pani Basia", hidden: true },
    { id: "2", type: "Hej2", user: "Pani Basia", hidden: true },
    { id: "3", type: "Hej3", user: "Pani Basia", hidden: false },
    { id: "4", type: "Hej4", user: "Pani Basia", hidden: true },
    { id: "5", type: "Hej5", user: "Pani Basia", hidden: true },
    { id: "6", type: "Hej6", user: "Pani Basia", hidden: true },
    { id: "7", type: "Hej7", user: "Pani Basia", hidden: true },
    { id: "8", type: "Hej8", user: "Pani Basia", hidden: true },
    { id: "9", type: "Hej9", user: "Pani Basia", hidden: false },
    { id: "10", type: "Hej10", user: "Pani Basia", hidden: true },
    { id: "11", type: "Hej11", user: "Pani Basia", hidden: true },
    { id: "12", type: "Hej12", user: "Pani Basia", hidden: true },
    { id: "13", type: "Hej13", user: "Pani Basia", hidden: true },
    { id: "14", type: "Hej14", user: "Pani Basia", hidden: true },
    { id: "15", type: "Hej15", user: "Pani Basia", hidden: true },
    { id: "16", type: "Hej16", user: "Pani Basia", hidden: false },
    { id: "17", type: "Hej17", user: "Pani Basia", hidden: true },
    { id: "18", type: "Hej18", user: "Pani Basia", hidden: true },
    { id: "19", type: "Hej19", user: "Pani Basia", hidden: false },
    { id: "20", type: "Hej20", user: "Pani Basia", hidden: true },
  ];
  return <TableDash header={header} rows={rows} form="Types" />;
}
