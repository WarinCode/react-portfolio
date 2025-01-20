import { Dispatch, SetStateAction } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

export async function fetchData<T>(
  path: string,
  set: Dispatch<SetStateAction<T>>,
  controller?: AbortController
) {
  try {
    const { data }: AxiosResponse<T> = await axios.get<T>(
      `${getLocalhost()}${path}`,
      { signal: controller?.signal }
    );
    set(data);
  } catch (e: any) {
    if (e instanceof AxiosError) {
      controller?.abort();
      console.error(e.message);
    }
  }
}

export const getClassName = (className: string | undefined): string => {
  return typeof className === "string" ? className : "";
}

export const getLocalhost = (customPort?: number): string => {
  const defaultPort: number = 3000;
  const port: number =
    typeof customPort === "number" ? customPort : defaultPort;
  return `http://localhost:${port}`;
}

export const getApiUrl = (): string => {
  return "https://server-for-react-portfolio.onrender.com/api";
}

export const getDomainName = (): string => {
  return "https://server-for-react-portfolio.onrender.com";
}

export const getEnv = (key: keyof ImportMetaEnv): string => {
  return import.meta.env[key];
}