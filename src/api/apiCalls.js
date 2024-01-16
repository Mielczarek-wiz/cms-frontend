"use client";
import ky from "ky";
import { useCallback } from "react";
import { mainUrl } from "./apiRoutes";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/zustand/useUserStore";

export const useCallGet = () => {
  const { call } = useCall("get");
  return { callGet: call };
};

export const useCallPost = () => {
  const { call } = useCall("post");
  return { callPost: call };
};

export const useCallPut = () => {
  const { call } = useCall("put");
  return { callPut: call };
};
export const useCallPatch = () => {
  const { call } = useCall("patch");
  return { callPatch: call };
};
export const useCallDelete = () => {
  const { call } = useCall("delete");
  return { callDelete: call };
};
const useCall = (method) => {
  const router = useRouter();

  const call = useCallback(
    async (url = "", body = {}, withAuth = false) => {
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
    [method, router]
  );

  return { call };
};

const handleError = (status, message, router) => {
  switch (status) {
    case 403:
      router.push("/login");
      break;
    case 400:
      console.log(message);
      break;
    default:
      break;
  }
};

/* 
EXAMPLE USING POST (DELETE, PUT, PATCH in the same way)
  const { callPost } = useCallPost();
  const onSubmit = async (data) => {
    const res = await callPost(getRoute("auth"), {
      email: data.email,
      password: data.password,
    });
  };
    
  const { callDelete } = useCallDelete();
  const test = async () => {
    const res = await callDelete(getRoute("users") + "/1", {}, true);
    console.log(res.toString());
  };

EXAMPLE USING GET
  const { callGet } = useCallGet();
  useEffect(() => {
    const getData = async () => {
      const res = await callGet(getRoute("users"), {}, true); 
      console.log(res);
    };
    getData();
  }, [callGet]);
*/
