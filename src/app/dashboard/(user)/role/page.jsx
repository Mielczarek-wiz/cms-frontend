"use client";
import { useCall } from "@/api/apiCalls";
import { getRoute } from "@/api/apiRoutes";
import AddButton from "@/components/dashboardSide/AddButton";
import { TableDash } from "@/components/dashboardSide/TableDash";
import FormPopup from "@/components/dashboardSide/forms/FormPopup";
import { useUserStore } from "@/zustand/useUserStore";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Roles() {
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  if (user.role === "Moderator") {
    router.push("/login");
  }
  const header = ["ID", "Name", "User", "Hidden"];
  const [popUp, setPopUp] = useState({
    isOpen: false,
    item: {},
  });
  const [rows, setRows] = useState([]);
  const { call } = useCall();

  const fetchData = useCallback(async () => {
    const res = await call("get", getRoute("roles"), {}, true);
    setRows(res);
  }, [call]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (id) => {
    const res = await call("delete", getRoute("roles") + `/${id}`, {}, true);
    fetchData();
  };
  const handleAddAndModify = async (data) => {
    data = { ...data, user: user.email };
    if (popUp.item !== null) {
      const res = await call(
        "put",
        getRoute("roles") + `/${popUp.item.id}`,
        data,
        true
      );
    } else {
      const res = await call("post", getRoute("roles"), data, true);
    }
    setPopUp({ ...popUp, isOpen: false });
    fetchData();
  };
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
          form={"Roles"}
          item={popUp.item}
          handleAddAndModify={handleAddAndModify}
        />
      ) : null}
    </>
  );
}
