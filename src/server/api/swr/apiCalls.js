import useSWR from "swr";
import { fetcher } from "./fetcher";

export const useCallGet = (url) => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  return { data, error, isLoading };
};

export const useCallPost = (url, body) => {
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  };

  const { data, error, isLoading } = fetcher(url, options);
  return { data, error, isLoading };
};

export const useCallPut = (url, body) => {
  const options = {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  };

  const { data, error, isLoading } = fetcher(url, options);
  return { data, error, isLoading };
};

export const useCallPatch = (url, body) => {
  const options = {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  };

  const { data, error, isLoading } = fetcher(url, options);
  return { data, error, isLoading };
};
