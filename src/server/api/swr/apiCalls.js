"use client";
import useSWR from "swr";
import ky from "ky";
import { useEffect, useState } from "react";

const fetcher = async ({ url, options }) => {
  try {
    const response = await ky.get(url, options).json();
    return response;
  } catch (e) {
    console.log(e);
  }
};
export const useCallGet = (url, options = {}) => {
  const { data, error, isLoading } = useSWR(
    { url: url, options: options },
    fetcher
  );

  return { data, error, isLoading };
};

export const useCallPost = (url, body = {}) => {
  const response = useRef({
    response: undefined,
    error: undefined,
    isLoading: true,
  });
  useEffect(() => {
    const options = {
      json: body,
    };
    const callPost = async () => {
      try {
        const res = await ky.post(url, options).json();
        response.current = {
          response: res,
          error: undefined,
          isLoading: false,
        };
      } catch (e) {
        response.current = {
          response: undefined,
          error: e,
          isLoading: false,
        };
      }
    };
    callPost();
  }, [body, url]);

  return response.current;
};

export const useCallPut = (url, body) => {
  const [response, setResponse] = useState({
    response: undefined,
    error: undefined,
    isLoading: true,
  });
  useEffect(() => {
    const options = {
      json: body,
    };
    const callPut = async () => {
      try {
        const res = await ky.put(url, options).json();
        setResponse({
          response: res,
          error: undefined,
          isLoading: false,
        });
      } catch (e) {
        setResponse({
          response: undefined,
          error: e,
          isLoading: false,
        });
      }
    };
    callPut();
  }, []);

  return response;
};

export const useCallPatch = (url, body) => {
  const response = useRef({
    response: undefined,
    error: undefined,
    isLoading: true,
  });
  useEffect(() => {
    const options = {
      json: body,
    };
    const callPatch = async () => {
      try {
        const res = await ky.patch(url, options).json();
        response.current = {
          response: res,
          error: undefined,
          isLoading: false,
        };
      } catch (e) {
        response.current = {
          response: undefined,
          error: e,
          isLoading: false,
        };
      }
    };
    callPatch();
  }, [body, url]);

  return response.current;
};
