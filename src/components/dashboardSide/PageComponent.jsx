"use client";
import { useCallback, useState } from "react";
import AddButton from "./AddButton";
import { TableDash } from "./TableDash";
import FormPopup from "./forms/FormPopup";
import { useCall } from "@/api/apiCalls";
import { getRoute } from "@/api/apiRoutes";
import { useUserStore } from "@/zustand/useUserStore";

export default function PageComponent({
  form = "",
  header = [],
  initialRows = [],
}) {
  const [popUp, setPopUp] = useState({
    isOpen: false,
    item: {},
  });
  const { call } = useCall();
  const [rows, setRows] = useState(initialRows);
  const fetchData = useCallback(async () => {
    const res = await call("get", getRoute(form), {}, true);
    setRows(res);
  }, [form, call]);

  const handleDelete = async (id) => {
    const res = await call("delete", getRoute(form) + `/${id}`, {}, true);
    fetchData();
  };
  const handleAddAndModify = async (data) => {
    data = { ...data, user: useUserStore.getState().user.email };
    if (popUp.item !== null) {
      const res = await call(
        "put",
        getRoute(form) + `/${popUp.item.id}`,
        data,
        true
      );
    } else {
      const res = await call("post", getRoute(form), data, true);
    }
    setPopUp({ ...popUp, isOpen: false });
    fetchData();
  };

  return (
    <>
      <AddButton setPopUp={setPopUp} />
      <TableDash
        header={header}
        rows={rows.length === 0 ? initialRows : rows}
        setPopUp={setPopUp}
        handleDelete={handleDelete}
      />
      {popUp.isOpen ? (
        <FormPopup
          setPopUp={setPopUp}
          form={form}
          item={popUp.item}
          handleAddAndModify={handleAddAndModify}
        />
      ) : null}
    </>
  );
}
