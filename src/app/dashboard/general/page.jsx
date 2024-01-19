"use client";
import { useCall } from "@/api/apiCalls";
import { getRoute } from "@/api/apiRoutes";
import PageComponent from "@/components/dashboardSide/PageComponent";
import { useCallback, useEffect, useState } from "react";

export default function Generals() {
  const header = ["ID", "Key", "Value", "Description", "User", "Hidden"];
  const { call } = useCall();
  const [rows, setRows] = useState([]);
  const fetchData = useCallback(async () => {
    const res = await call("get", getRoute("generals"), {}, true);
    setRows(res);
  }, [call]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <PageComponent form={"Generals"} header={header} initialRows={rows} />;
}
