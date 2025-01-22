import axios, { AxiosResponse, AxiosError, HttpStatusCode, AxiosRequestConfig } from "axios";
import useLocalStorage from "./useLocalStorage";
import { Token, UserLogin } from "../types";
import { getApiUrl, getDomainName, getEnv, getAxiosConfig } from "../utils";

export default async function useLogin() {
  const preRequest = async (): Promise<number> => {
    const axiosConfig: AxiosRequestConfig = getAxiosConfig();
    
    try {
      const { status }: AxiosResponse = await axios.get(getApiUrl() + "/user", axiosConfig);
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
      useLocalStorage("token", data.token);
    }
  }

  const newLogin = async (): Promise<void> => {
    if (useLocalStorage("token") !== null) {
      localStorage.removeItem("token");
    }

    await login();
  }

  try {
    const status: number = await preRequest();
    switch (status) {
      case HttpStatusCode.Unauthorized:
        console.log("เริ่ม login");
        await login();
        break;
      case HttpStatusCode.Forbidden:
        console.log("login ใหม่");
        await newLogin();
        break;
      case HttpStatusCode.Ok:
        console.log("login สำเร็จ");
        break;
      default:
        console.error(status);
    }
  } catch (err: any) {
    if (err instanceof AxiosError) {
      console.error(err);
    }
  }
}