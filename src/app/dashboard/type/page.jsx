import TableDash from "@/components/dashboardSide/TableDash";

export default function Type() {
  const header = ["ID", "Type", "Hidden"];
  const rows = [
    { id: "1", type: "Hej1", isVisible: true },
    { id: "2", type: "Hej2", isVisible: true },
    { id: "3", type: "Hej3", isVisible: false },
    { id: "4", type: "Hej4", isVisible: true },
    { id: "5", type: "Hej5", isVisible: true },
    { id: "6", type: "Hej6", isVisible: true },
    { id: "7", type: "Hej7", isVisible: true },
    { id: "8", type: "Hej8", isVisible: true },
    { id: "9", type: "Hej9", isVisible: false },
    { id: "10", type: "Hej10", isVisible: true },
    { id: "11", type: "Hej11", isVisible: true },
    { id: "12", type: "Hej12", isVisible: true },
    { id: "13", type: "Hej13", isVisible: true },
    { id: "14", type: "Hej14", isVisible: true },
    { id: "15", type: "Hej15", isVisible: true },
    { id: "16", type: "Hej16", isVisible: false },
    { id: "17", type: "Hej17", isVisible: true },
    { id: "18", type: "Hej18", isVisible: true },
    { id: "19", type: "Hej19", isVisible: false },
    { id: "20", type: "Hej20", isVisible: true },
  ];
  return <TableDash header={header} rows={rows}/>
}
