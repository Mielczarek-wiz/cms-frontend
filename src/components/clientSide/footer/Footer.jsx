"use client";
import Image from "next/image";
import Social from "../social/Social";
import { useCall } from "@/api/apiCalls";
import { getRoute } from "@/api/apiRoutes";
import { useCallback, useEffect, useState } from "react";

export default function Footer() {
  const { call } = useCall();
  const [footer, setFooter] = useState([]);
  const fetchFooter = useCallback(async () => {
    const res = await call("get", getRoute("footer"), {}, false, false);
    setFooter(res);
  }, [call]);
  useEffect(() => {
    fetchFooter();
  }, [fetchFooter]);
  return (
    <footer className="w-screen p-8 bg-neutral-800 h-fit">
      <div className="">
        {footer.map((item) => {
          return item.key === "footer_title" ? (
            <p key={item.id} className="font-bold text-white">
              {item.value}
            </p>
          ) : null;
        })}
        {footer.map((item) => {
          return item.key === "footer_text" ? (
            <p key={item.id} className="mt-6 text-neutral-500">
              {item.value}
            </p>
          ) : null;
        })}
      </div>
      <div className="flex justify-between py-8 font-bold text-white flex-rows">
        {footer.map((item) => {
          return item.key === "footer_icons" ? (
            <Social key={item.id} socialsLink={item.value} />
          ) : null;
        })}
      </div>
      <hr className="h-px my-8 border-0 bg-neutral-500" />
      <div className="flex flex-col items-center justify-between md:flex-row md:items-start">
        <Image
          src="/images/logo-light-115x34.png"
          alt="Logo"
          width={115}
          height={10}
        />
        {footer.map((item) => {
          return item.key === "footer_copyright" ? (
            <span key={item.id} className="mt-6 text-neutral-500 md:mt-0">
              {item.value}
            </span>
          ) : null;
        })}
      </div>
    </footer>
  );
}
