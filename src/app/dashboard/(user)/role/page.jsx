import {TableDash} from "@/components/dashboardSide/TableDash";

export default function Roles() {
  const header = ["ID", "Name", "Hidden"];
  const rows = [
    { id: "1", name: "Hej1", isVisible: true },
    { id: "2", name: "Hej2", isVisible: true },
    { id: "3", name: "Hej3", isVisible: false },
    { id: "4", name: "Hej4", isVisible: true },
    { id: "5", name: "Hej5", isVisible: true },
    { id: "6", name: "Hej6", isVisible: true },
    { id: "7", name: "Hej7", isVisible: true },
    { id: "8", name: "Hej8", isVisible: true },
    { id: "9", name: "Hej9", isVisible: false },
    { id: "10", name: "Hej10", isVisible: true },
    { id: "11", name: "Hej11", isVisible: true },
    { id: "12", name: "Hej12", isVisible: true },
    { id: "13", name: "Hej13", isVisible: true },
    { id: "14", name: "Hej14", isVisible: true },
    { id: "15", name: "Hej15", isVisible: true },
    { id: "16", name: "Hej16", isVisible: false },
    { id: "17", name: "Hej17", isVisible: true },
    { id: "18", name: "Hej18", isVisible: true },
    { id: "19", name: "Hej19", isVisible: false },
    { id: "20", name: "Hej20", isVisible: true },
  ];
  return <TableDash header={header} rows={rows}/>
}
