import { useState, useEffect, useCallback, Dispatch, SetStateAction } from "react";
import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import useLogin from "./useLogin";
import { getAxiosConfig } from "../utils";

useLogin();

export default function useFetch<T extends object | object[]>(
  url: string,
): [T | null, Dispatch<SetStateAction<T | null>>, () => void] {
  const [data, setData] = useState<T | null>(null);

  const fetchData = useCallback(async (): Promise<void> => {
    const axiosConfig: AxiosRequestConfig = getAxiosConfig();

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
    setTimeout(fetchData, 2000);

    return (): void => {
      setData(null);
    };
  }, []);

  return [data, setData, fetchData];
}
