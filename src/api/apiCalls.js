"use client";
import ky from "ky";
import { useCallback } from "react";
import { mainUrl } from "./apiRoutes";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/zustand/useUserStore";
import { toast } from "react-toastify";

export const useCall = () => {
  const router = useRouter();

  const call = useCallback(
    async (method = "get", url = "", body = {}, withAuth = false) => {
      try {
        const options = {
          prefixUrl: mainUrl,
          method: method,
        };
        if (method !== "get") {
          options.json = body;
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
        const message = await error.response?.json();
        handleError(error.response?.status, message, router);
      }
    },
    [router]
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
