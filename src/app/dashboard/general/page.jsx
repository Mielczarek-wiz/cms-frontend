import TableDash from "@/components/dashboardSide/TableDash";

export default function General() {
  const header = ["ID", "Key", "Value", "Description", "Is Visible?"]
  const rows = [
    {id: "1", key: "Hej1", value: "hej", description: "hello@o2.pl", isVisible: true},
    {id: "2", key: "Hej2", value: "hej", description: "hello@o2.pl", isVisible: true},
    {id: "3", key: "Hej3", value: "hej", description: "hello@o2.pl", isVisible: false},
    {id: "4", key: "Hej4", value: "hej", description: "hello@o2.pl", isVisible: true},
    {id: "5", key: "Hej5", value: "hej", description: "hello@o2.pl", isVisible: true},
    {id: "6", key: "Hej6", value: "hej", description: "hello@o2.pl", isVisible: true},
    {id: "7", key: "Hej7", value: "hej", description: "hello@o2.pl", isVisible: true},
    {id: "8", key: "Hej8", value: "hej", description: "hello@o2.pl", isVisible: true},
    {id: "9", key: "Hej9", value: "hej", description: "hello@o2.pl", isVisible: false},
    {id: "10", key: "Hej10", value: "hej", description: "hello@o2.pl", isVisible: true},
    {id: "11", key: "Hej11", value: "hej", description: "hello@o2.pl", isVisible: true},
    {id: "12", key: "Hej12", value: "hej", description: "hello@o2.pl", isVisible: true},
    {id: "13", key: "Hej13", value: "hej", description: "hello@o2.pl", isVisible: true},
    {id: "14", key: "Hej14", value: "hej", description: "hello@o2.pl", isVisible: true},
    {id: "15", key: "Hej15", value: "hej", description: "hello@o2.pl", isVisible: true},
    {id: "16", key: "Hej16", value: "hej", description: "hello@o2.pl", isVisible: false},
    {id: "17", key: "Hej17", value: "hej", description: "hello@o2.pl", isVisible: true},
    {id: "18", key: "Hej18", value: "hej", description: "hello@o2.pl", isVisible: true},
    {id: "19", key: "Hej19", value: "hej", description: "hello@o2.pl", isVisible: false},
    {id: "20", key: "Hej20", value: "hej", description: "hello@o2.pl", isVisible: true},
  ]
  return (
    <>

      <TableDash header={header} rows={rows}/>
    </>
  );
}
