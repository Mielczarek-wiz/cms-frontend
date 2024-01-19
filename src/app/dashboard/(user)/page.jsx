"use client";
import { useCall } from "@/api/apiCalls";
import { getRoute } from "@/api/apiRoutes";
import PageComponent from "@/components/dashboardSide/PageComponent";
import { useUserStore } from "@/zustand/useUserStore";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Users() {
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const { call } = useCall();
  const [rows, setRows] = useState([]);
  const header = ["ID", "Name", "Surname", "Email", "Role"];

  const redirectIfModerator = useCallback(() => {
    if (user.role === "Moderator") {
      router.push("/login");
    }
  }, [user.role, router]);

  const fetchData = useCallback(async () => {
    const res = await call("get", getRoute("users"), {}, true);
    setRows(res);
  }, [call]);
  useEffect(() => {
    redirectIfModerator();
    fetchData();
  }, [fetchData, redirectIfModerator]);

  return <PageComponent form={"Users"} header={header} initialRows={rows} />;
}
