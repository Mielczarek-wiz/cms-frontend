"use client";
import { useCallback, useState, useEffect } from "react";
import AddButton from "./AddButton";
import { TableDash } from "./TableDash";
import FormPopup from "./forms/FormPopup";
import { useCall } from "@/api/apiCalls";
import { getRoute } from "@/api/apiRoutes";
import { toast } from "react-toastify";
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
    setRows(res !== null && res !== undefined ? res : []);
  }, [form, call]);

  const handleDelete = async (id) => {
    const data = { user: useUserStore.getState().user.email };
    const res = await call("delete", getRoute(form) + `/${id}`, data, true);
    res !== null && res !== undefined ? toast.success(res.message) : null;
    fetchData();
  };
  const handleAddAndModify = async (data, isFile = false) => {
    let res = { message: null };
    if (popUp.item !== null) {
      res = await call(
        "put",
        getRoute(form) + `/${popUp.item.id}`,
        data,
        true,
        isFile
      );
    } else {
      res = await call("post", getRoute(form), data, true, isFile);
    }
    res !== null && res !== undefined ? toast.success(res.message) : null;
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
