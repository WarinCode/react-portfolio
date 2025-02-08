import { useState, useEffect, useCallback, Dispatch, SetStateAction } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

export default function useFetch<T extends object | object[]>(
  url: string,
): [T | null, Dispatch<SetStateAction<T | null>>, () => void] {
  const [data, setData] = useState<T | null>(null);

  const fetchData = useCallback(async (): Promise<void> => {

    try {
      const response: AxiosResponse<T> = await axios.get<T>(url);
      setData(response.data);
    } catch (err: any) {
      if (err instanceof AxiosError) {
        console.error(err.message);
        setData(null);
      }
    }
  }, []);

  useEffect((): (() => void) => {
    fetchData();

    return (): void => {
      setData(null);
    };
  }, []);

  return [data, setData, fetchData];
}
