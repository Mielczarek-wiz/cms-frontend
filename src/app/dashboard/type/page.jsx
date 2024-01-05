import { TableDash } from "@/components/dashboardSide/TableDash";

export default function Types() {
  const header = ["ID", "Type", "Hidden"];
  const rows = [
    { id: "1", type: "Hej1", hidden: true },
    { id: "2", type: "Hej2", hidden: true },
    { id: "3", type: "Hej3", hidden: false },
    { id: "4", type: "Hej4", hidden: true },
    { id: "5", type: "Hej5", hidden: true },
    { id: "6", type: "Hej6", hidden: true },
    { id: "7", type: "Hej7", hidden: true },
    { id: "8", type: "Hej8", hidden: true },
    { id: "9", type: "Hej9", hidden: false },
    { id: "10", type: "Hej10", hidden: true },
    { id: "11", type: "Hej11", hidden: true },
    { id: "12", type: "Hej12", hidden: true },
    { id: "13", type: "Hej13", hidden: true },
    { id: "14", type: "Hej14", hidden: true },
    { id: "15", type: "Hej15", hidden: true },
    { id: "16", type: "Hej16", hidden: false },
    { id: "17", type: "Hej17", hidden: true },
    { id: "18", type: "Hej18", hidden: true },
    { id: "19", type: "Hej19", hidden: false },
    { id: "20", type: "Hej20", hidden: true },
  ];
  return <TableDash header={header} rows={rows} form="Types" />;
}
