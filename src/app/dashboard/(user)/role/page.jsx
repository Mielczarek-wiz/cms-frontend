import { TableDash } from "@/components/dashboardSide/TableDash";

export default function Roles() {
  const header = ["ID", "Name", "Hidden"];
  const rows = [
    { id: "1", name: "Moderator", isVisible: true },
    { id: "2", name: "Admin", isVisible: true },
  ];
  return <TableDash header={header} rows={rows} form="Roles" />;
}
