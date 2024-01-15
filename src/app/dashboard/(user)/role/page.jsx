"use client";
import { TableDash } from "@/components/dashboardSide/TableDash";
import { useUserStore } from "@/zustand/useUserStore";
import { useRouter } from "next/navigation";

export default function Roles() {
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  if (user.role === "Moderator") {
    router.push("/login");
  } else {
    const header = ["ID", "Name", "Hidden"];
    const rows = [
      { id: "1", name: "Moderator", hidden: true },
      { id: "2", name: "Admin", hidden: true },
    ];

    return <TableDash header={header} rows={rows} form="Roles" />;
  }
}
