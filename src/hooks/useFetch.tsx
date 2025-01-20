import { useState, useEffect, useCallback, Dispatch, SetStateAction } from "react";
import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import useLocalStorage from "./useLocalStorage";
import useLogin from "./useLogin";

export default function useFetch<T extends object | object[]>(
  url: string,
): [T | null, Dispatch<SetStateAction<T | null>>, () => void] {
  const [loginStatus] = useLogin();
  const [data, setData] = useState<T | null>(null);

  const fetchData = useCallback(async (): Promise<void> => {
    const axiosConfig: AxiosRequestConfig = {
      headers: { Authorization: useLocalStorage("token") },
    };

    try {
      const response: AxiosResponse<T> = await axios.get<T>(url, axiosConfig);
      setData(response.data);
    } catch (err: any) {
      if (err instanceof AxiosError) {
        console.error(err.message);
        setData(null);
      }
    }
  }, []);

  useEffect((): (() => void) => {
    if(loginStatus){
      fetchData();
    }

    return (): void => {
      setData(null);
    };
  }, [loginStatus]);

  return [data, setData, fetchData];
}
