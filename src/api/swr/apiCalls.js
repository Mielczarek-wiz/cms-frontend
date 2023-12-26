"use client";
import useSWR from "swr";
import ky from "ky";
import { useCallback, useState } from "react";
import { mainUrl } from "./apiRoutes";

const fetcherGet = async ({ url, options }) => {
  const allOptions = {
    ...options,
    prefixUrl: mainUrl,
    method: "get",
  };
  try {
    const response = await ky(url, allOptions).json();
    return response;
  } catch (e) {
    return e;
  }
};
export const useCallGet = (url, options = {}) => {
  const { data, error, isLoading } = useSWR(
    { url: url, options: options },
    fetcherGet
  );

  return { data, error, isLoading };
};

export const useCallPost = () => {
  const { data, error, isLoading, call } = useCall("post");
  return { data, error, isLoading, callPost: call };
};

export const useCallPut = () => {
  const { data, error, isLoading, call } = useCall("put");
  return { data, error, isLoading, callPut: call };
};
export const useCallPatch = () => {
  const { data, error, isLoading, call } = useCall("patch");
  return { data, error, isLoading, callPatch: call };
};
export const useCallDelete = () => {
  const { data, error, isLoading, call } = useCall("delete");
  return { data, error, isLoading, callDelete: call };
};
const useCall = (method) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const call = useCallback(
    async (url, body = {}) => {
      try {
        setIsLoading(true);
        const options = {
          prefixUrl: mainUrl,
          method: method,
          json: body,
        };
        const res = await ky(url, options).json();
        setData(res);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    },
    [method]
  );

  return { data, error, isLoading, call };
};
