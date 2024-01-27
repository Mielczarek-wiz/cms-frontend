"use client";
import { useCallback, useEffect, useState } from "react";
import Infobox from "../infoboxes/Infobox";
import { useCall } from "@/api/apiCalls";
import { getRoute } from "@/api/apiRoutes";

export default function Address({ className = "" }) {
  const { call } = useCall();
  const [address, setAddress] = useState([]);
  const fetchAddress = useCallback(async () => {
    const address = await call("get", getRoute("header"), {}, false, false);
    const infobox1 = await call(
      "get",
      getRoute("infoboxclient") + "/" + address[0].value,
      {},
      false,
      false
    );
    const infobox2 = await call(
      "get",
      getRoute("infoboxclient") + "/" + address[1].value,
      {},
      false,
      false
    );

    setAddress([infobox1, infobox2]);
  }, [call]);
  useEffect(() => {
    fetchAddress();
  }, [fetchAddress]);
  return (
    <ul className={className}>
      {address.map((props) => (
        <li className="p-2" key={props.id}>
          <Infobox
            id={props.id}
            iconRef={props.image}
            information={props.information}
            subInformation={props.subinformation}
            isVisible={!props.hidden}
            width={24}
            height={24}
          />
        </li>
      ))}
    </ul>
  );
}
