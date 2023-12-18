import {TableDash} from "@/components/dashboardSide/TableDash";

export default function Users() {
  const header = ["ID", "Name", "Surname", "Email", "Role"]
  const rows = [
    {id: "1", name: "Hej1", surname: "hej", email: "hello@o2.pl", role:"role1"},
    {id: "2", name: "Hej2", surname: "hej", email: "hello@o2.pl", role:"role1"},
    {id: "3", name: "Hej3", surname: "hej", email: "hello@o2.pl", role:"role1"},
    {id: "4", name: "Hej4", surname: "hej", email: "hello@o2.pl", role:"role1"},
    {id: "5", name: "Hej5", surname: "hej", email: "hello@o2.pl", role:"role1"},
    {id: "6", name: "Hej6", surname: "hej", email: "hello@o2.pl", role:"role1"},
    {id: "7", name: "Hej7", surname: "hej", email: "hello@o2.pl", role:"role1"},
    {id: "8", name: "Hej8", surname: "hej", email: "hello@o2.pl", role:"role1"},
    {id: "9", name: "Hej9", surname: "hej", email: "hello@o2.pl", role:"role1"},
    {id: "10", name: "Hej10", surname: "hej", email: "hello@o2.pl", role:"role1"},
    {id: "11", name: "Hej11", surname: "hej", email: "hello@o2.pl", role:"role1"},
    {id: "12", name: "Hej12", surname: "hej", email: "hello@o2.pl", role:"role1"},
    {id: "13", name: "Hej13", surname: "hej", email: "hello@o2.pl", role:"role1"},
    {id: "14", name: "Hej14", surname: "hej", email: "hello@o2.pl", role:"role1"},
    {id: "15", name: "Hej15", surname: "hej", email: "hello@o2.pl", role:"role1"},
    {id: "16", name: "Hej16", surname: "hej", email: "hello@o2.pl", role:"role1"},
    {id: "17", name: "Hej17", surname: "hej", email: "hello@o2.pl", role:"role1"},
    {id: "18", name: "Hej18", surname: "hej", email: "hello@o2.pl", role:"role1"},
    {id: "19", name: "Hej19", surname: "hej", email: "hello@o2.pl", role:"role1"},
    {id: "20", name: "Hej20", surname: "hej", email: "hello@o2.pl", role:"role1"},
  ]
  return (
    <>

      <TableDash header={header} rows={rows}/>
    </>
  );
}
