"use client";
import { TableDash } from "@/components/dashboardSide/TableDash";
import { useUserStore } from "@/zustand/useUserStore";
import { useRouter } from "next/navigation";

export default function Users() {
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  if (user.role === "Moderator") {
    router.push("/login");
  } else {
    const header = ["ID", "Name", "Surname", "Email", "Role"];
    const rows = [
      {
        id: "1",
        name: "Hej1",
        surname: "hej",
        email: "hello@o2.pl",
        role: "Admin",
      },
      {
        id: "2",
        name: "Hej2",
        surname: "hej",
        email: "hello@o2.pl",
        role: "Admin",
      },
      {
        id: "3",
        name: "Hej3",
        surname: "hej",
        email: "hello@o2.pl",
        role: "Admin",
      },
      {
        id: "4",
        name: "Hej4",
        surname: "hej",
        email: "hello@o2.pl",
        role: "Moderator",
      },
      {
        id: "5",
        name: "Hej5",
        surname: "hej",
        email: "hello@o2.pl",
        role: "Moderator",
      },
      {
        id: "6",
        name: "Hej6",
        surname: "hej",
        email: "hello@o2.pl",
        role: "Moderator",
      },
      {
        id: "7",
        name: "Hej7",
        surname: "hej",
        email: "hello@o2.pl",
        role: "Moderator",
      },
      {
        id: "8",
        name: "Hej8",
        surname: "hej",
        email: "hello@o2.pl",
        role: "Moderator",
      },
      {
        id: "9",
        name: "Hej9",
        surname: "hej",
        email: "hello@o2.pl",
        role: "Moderator",
      },
      {
        id: "10",
        name: "Hej10",
        surname: "hej",
        email: "hello@o2.pl",
        role: "Moderator",
      },
      {
        id: "11",
        name: "Hej11",
        surname: "hej",
        email: "hello@o2.pl",
        role: "Moderator",
      },
      {
        id: "12",
        name: "Hej12",
        surname: "hej",
        email: "hello@o2.pl",
        role: "Moderator",
      },
      {
        id: "13",
        name: "Hej13",
        surname: "hej",
        email: "hello@o2.pl",
        role: "Moderator",
      },
      {
        id: "14",
        name: "Hej14",
        surname: "hej",
        email: "hello@o2.pl",
        role: "Moderator",
      },
      {
        id: "15",
        name: "Hej15",
        surname: "hej",
        email: "hello@o2.pl",
        role: "Moderator",
      },
      {
        id: "16",
        name: "Hej16",
        surname: "hej",
        email: "hello@o2.pl",
        role: "Moderator",
      },
      {
        id: "17",
        name: "Hej17",
        surname: "hej",
        email: "hello@o2.pl",
        role: "Moderator",
      },
      {
        id: "18",
        name: "Hej18",
        surname: "hej",
        email: "hello@o2.pl",
        role: "Moderator",
      },
      {
        id: "19",
        name: "Hej19",
        surname: "hej",
        email: "hello@o2.pl",
        role: "Moderator",
      },
      {
        id: "20",
        name: "Hej20",
        surname: "hej",
        email: "hello@o2.pl",
        role: "Moderator",
      },
    ];

    return (
      <>
        <TableDash header={header} rows={rows} form="Users" />
      </>
    );
  }
}
