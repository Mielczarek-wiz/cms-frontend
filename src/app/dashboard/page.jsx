import TableDash from "@/components/dashboardSide/TableDash";

export default function Users() {
  const header = ["ID", "Name", "Surname", "Email"]
  const rows = [
    {id: "1", name: "Hej1", surname: "hej", email: "hello@o2.pl"},
    {id: "2", name: "Hej2", surname: "hej", email: "hello@o2.pl"},
    {id: "3", name: "Hej3", surname: "hej", email: "hello@o2.pl"},
    {id: "4", name: "Hej4", surname: "hej", email: "hello@o2.pl"},
    {id: "5", name: "Hej5", surname: "hej", email: "hello@o2.pl"},
    {id: "6", name: "Hej6", surname: "hej", email: "hello@o2.pl"},
    {id: "7", name: "Hej7", surname: "hej", email: "hello@o2.pl"},
    {id: "8", name: "Hej8", surname: "hej", email: "hello@o2.pl"},
    {id: "9", name: "Hej9", surname: "hej", email: "hello@o2.pl"},
    {id: "10", name: "Hej10", surname: "hej", email: "hello@o2.pl"},
    {id: "11", name: "Hej11", surname: "hej", email: "hello@o2.pl"},
  ]
  return (
    <>

      <TableDash header={header} rows={rows}/>
    </>
  );
}
