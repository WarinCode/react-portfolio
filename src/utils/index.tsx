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

export function getLocalhost(customPort?: number) {
  const defaultPort: number = 3000;
  const port: number =
    typeof customPort === "number" ? customPort : defaultPort;
  return `http://localhost:${port}`;
}
