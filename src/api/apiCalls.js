"use client";
import ky from "ky";
import { useCallback, useEffect, useState } from "react";
import { mainUrl } from "./apiRoutes";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/zustand/useUserStore";
import { toast } from "react-toastify";

export const useCall = () => {
  const router = useRouter();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      handleError(error.status, error.message, router);
    }
  }, [error, router]);

  const call = useCallback(
    async (
      method = "get",
      url = "",
      body = {},
      withAuth = false,
      isFile = false
    ) => {
      try {
        const options = {
          prefixUrl: mainUrl,
          method: method,
        };
        if (method !== "get") {
          if (isFile) {
            options.body = body;
          } else {
            options.json = body;
          }
        }
        if (withAuth) {
          options.hooks = {
            beforeRequest: [
              (request) => {
                request.headers.set(
                  "Authorization",
                  `Bearer ${useUserStore.getState().user.token}`
                );
              },
            ],
          };
        }
        const res = await ky(url, options);

        const data = await res.json();

        return data;
      } catch (error) {
        const status = error.response.status;
        const message = await error.response.json();
        setError({ status: status, message: message });
        return null;
      }
    },
    []
  );

  return { call };
};

const handleError = (status, message, router = null) => {
  switch (status) {
    case 403:
      toast.error(message.message);
      router.push("/login");
      break;
    case 400:
      toast.error(message.message);
      break;
    default:
      toast.error(message.message);
      break;
  }
};
