"use client";
import Link from "next/link";
import { useCall } from "@/api/apiCalls";
import { useEffect, useCallback, useState } from "react";
import { getRoute } from "@/api/apiRoutes";

export default function Menu({ className = "" }) {
  const { call } = useCall();
  const [menu, setMenu] = useState([]);
  const fetchMenu = useCallback(async () => {
    const response = await call("get", getRoute("menu"), {}, false, false);
    setMenu(response);
  }, [call]);
  useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);
  return (
    <menu className="w-full bg-gray-400">
      <nav className="w-full">
        <ul className={className}>
          {menu.map((route) =>
            !route.hidden ? (
              <>
                <li
                  key={route.id}
                  className="relative flex flex-row items-center justify-start w-full p-4 text-lg text-white cursor-pointer group lg:w-fit hover:text-gray-500 lg:hover:bg-transparent"
                >
                  <Link href={route.link}>{route.name.toUpperCase()}</Link>

                  {route.subpages.length === 0 ? null : (
                    <div className="absolute z-50 flex flex-col invisible px-4 py-1 text-white bg-gray-400 border left-4 w-60 group-hover:visible top-14">
                      {route.subpages.map((subpage) => (
                        <Link
                          key={subpage.id}
                          href={subpage.link}
                          className="block py-1 my-2 font-semibold text-white border-b border-gray-100 hover:text-gray-500 md:mx-2 lg:hover:bg-gray-400"
                        >
                          {subpage.name.toUpperCase()}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              </>
            ) : null
          )}
        </ul>
      </nav>
    </menu>
  );
}
