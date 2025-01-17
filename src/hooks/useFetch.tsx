import { useState, useEffect, Dispatch, SetStateAction } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

export default function useFetch<T extends object | object[]>(
  url: string,
  controller?: AbortController
): [T | null, Dispatch<SetStateAction<T | null>>, () => void] {
  const [data, setData] = useState<T | null>(null);

  const fetchData = (): void => {
    try {
      axios
        .get<T>(url, { signal: controller?.signal })
        .then((res: AxiosResponse<T>): void => setData(res.data))
        .catch((res: any): void => {
          throw res;
        });
    } catch (e: any) {
      if (e instanceof AxiosError) {
        controller?.abort();
        console.error(e.message);
        setData(null);
      }
    }
  };

  useEffect((): (() => void) => {
    fetchData();

    return (): void => {
      controller?.abort();
      setData(null);
    };
  }, []);

  return [data, setData, fetchData];
}
