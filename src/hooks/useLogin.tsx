import { useState, useEffect, useCallback, Dispatch, SetStateAction } from "react";
import axios, { AxiosResponse, AxiosError, HttpStatusCode, AxiosRequestConfig } from "axios";
import useLocalStorage from "./useLocalStorage";
import { Token, UserLogin } from "../types";
import { getApiUrl, getDomainName, getEnv } from "../utils";

export default function useLogin(): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [loginStatus, setLoginStatus] = useState<boolean>(false);

  const preRequest = useCallback(async (): Promise<number> => {
    const axiosConfig: AxiosRequestConfig = {
      headers: { Authorization: useLocalStorage("token") },
    };

    try {
      const { status }: AxiosResponse = await axios.get(getApiUrl() + "/user", axiosConfig);
      return status;
    } catch (err: any) {
      if (err instanceof AxiosError) {
        return err.status as number;
      }
    } 

    return HttpStatusCode.Forbidden;
  }, []);

  const login = useCallback(async (): Promise<void> => {
    const url: string = getDomainName() + "/login";
    const payload: Omit<UserLogin, "userId"> = {
      username: getEnv("VITE_USERNAME"),
      password: getEnv("VITE_PASSWORD"),
    };
    const { data, status }: AxiosResponse<Token> = await axios.post<Token>(url, payload);

    if (status === HttpStatusCode.Ok) {
      useLocalStorage("token", data.token);
    }
  }, []);

  const newLogin = useCallback(async (): Promise<void> => {
    if (useLocalStorage("token") !== null) {
      localStorage.removeItem("token");
    }

    await login();
  }, []);

  useEffect((): void => {
    (async (): Promise<void> => {
      try {
        if (!loginStatus) {
          const status: number = await preRequest();
          switch (status) {
            case HttpStatusCode.Unauthorized:
              console.log("เริ่ม login");
              await login();
              setLoginStatus(true);
              break;
            case HttpStatusCode.Forbidden:
              console.log("login ใหม่");
              await newLogin();
              setLoginStatus(true);
              break;
            case HttpStatusCode.Ok:
              console.log("login สำเร็จ");
              setLoginStatus(true);
              break;
            default:
              console.error(status);
              setLoginStatus(false);
          }
        }
      } catch (err: any) {
        if (err instanceof AxiosError) {
          console.error(err);
        }
      }
    })();
  }, []);

  return [loginStatus, setLoginStatus];
}
