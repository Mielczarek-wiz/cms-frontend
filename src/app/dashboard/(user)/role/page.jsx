"use client";
import { useCallDelete, useCallGet } from "@/api/apiCalls";
import { getRoute } from "@/api/apiRoutes";
import { TableDash } from "@/components/dashboardSide/TableDash";
import { useUserStore } from "@/zustand/useUserStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Roles() {
  const user = useUserStore((state) => state.user);
  const [rows, setRows] = useState([]);
  const router = useRouter();
  if (user.role === "Moderator") {
    router.push("/login");
  }
  const header = ["ID", "Name", "User", "Hidden"];
  const { callGet } = useCallGet();
  const { callDelete } = useCallDelete();
  useEffect(() => {
    const fetchData = async () => {
      const res = await callGet(getRoute("roles"), {}, true);
      setRows(res);
    };

    fetchData();
  }, [callGet]);

  const handleDelete = async (id) => {
    const res = await callDelete(getRoute("roles") + `/${id}`, {}, true);
    console.log(res);
  };
  return (
    <TableDash
      header={header}
      rows={rows}
      form="Roles"
      handleDelete={handleDelete}
    />
  );
}
