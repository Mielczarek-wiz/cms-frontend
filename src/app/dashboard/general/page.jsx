"use client";
import { useCall } from "@/api/apiCalls";
import { getRoute } from "@/api/apiRoutes";
import AddButton from "@/components/dashboardSide/AddButton";
import { TableDash } from "@/components/dashboardSide/TableDash";
import FormPopup from "@/components/dashboardSide/forms/FormPopup";
import { useUserStore } from "@/zustand/useUserStore";
import { useCallback, useEffect, useState } from "react";

export default function Generals() {
  const handleDelete = async (id) => {
    const res = await call("delete", getRoute("generals") + `/${id}`, {}, true);
    fetchData();
  };

  const [popUp, setPopUp] = useState({
    isOpen: false,
    item: {},
  });
  const header = ["ID", "Key", "Value", "Description", "User", "Hidden"];
  const { call } = useCall();
  const [rows, setRows] = useState([]);
  const fetchData = useCallback(async () => {
    const res = await call("get", getRoute("generals"), {}, true);
    setRows(res);
  }, [call]);

  const handleAddAndModify = async (data) => {
    data = { ...data, user: useUserStore.getState().user.email };
    if (popUp.item !== null) {
      const res = await call(
        "put",
        getRoute("generals") + `/${popUp.item.id}`,
        data,
        true
      );
    } else {
      const res = await call("post", getRoute("generals"), data, true);
    }
    setPopUp({ ...popUp, isOpen: false });
    fetchData();
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <>
      <AddButton setPopUp={setPopUp} />
      <TableDash
        header={header}
        rows={rows}
        setPopUp={setPopUp}
        handleDelete={handleDelete}
      />
      {popUp.isOpen ? (
        <FormPopup
          setPopUp={setPopUp}
          form={"Generals"}
          item={popUp.item}
          handleAddAndModify={handleAddAndModify}
        />
      ) : null}
    </>
  );
}
