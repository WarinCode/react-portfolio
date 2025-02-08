import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError, HttpStatusCode } from "axios";
import { Token, UserLogin, UseAuthData } from "../types";
import { getApiUrl, getDomainName, getEnv } from "../utils";

export default function useAuth(): UseAuthData {
  const [isError, setIsError] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");

  const preRequest = async (): Promise<number> => {

    try {
      const { status }: AxiosResponse = await axios.get(getApiUrl() + "/user");
      return status;
    } catch (err: any) {
      if (err instanceof AxiosError) {
        return err.status as number;
      }
    }

    return HttpStatusCode.Forbidden;
  }

  const login = async (): Promise<void> => {
    const url: string = getDomainName() + "/login";
    const payload: Omit<UserLogin, "userId"> = {
      username: getEnv("VITE_USERNAME"),
      password: getEnv("VITE_PASSWORD"),
    };
    const { data, status }: AxiosResponse<Token> = await axios.post<Token>(url, payload);

    if (status === HttpStatusCode.Ok) {
      setToken(data.token);
      setIsError(false);
    }
  }

  useEffect((): void => {
    (async (): Promise<void> => {
      try {
        const status: number = await preRequest();
        switch (status) {
          case HttpStatusCode.Unauthorized:
            setIsError(true);
            console.log("เริ่ม login");
            await login();
            break;
          case HttpStatusCode.Forbidden:
            setIsError(true);
            console.log("เริ่ม login");
            await login();
            break;
          case HttpStatusCode.Ok:
            setIsError(false);
            console.log("login สำเร็จ");
            break;
          default:
            setIsError(true);
            console.error(status);
        }
      } catch (err: any) {
        if (err instanceof AxiosError) {
          console.error(err);
        }
      }
    })();
  }, []);

  return { isError, setIsError, token, setToken };
}