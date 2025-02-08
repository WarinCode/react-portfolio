import { Dispatch, HTMLAttributes, SetStateAction } from "react";
import UserModel from "./models/user";
import { Courses } from "./models/course";

export interface Attributes<T extends HTMLElement = HTMLElement> {
  attributes?: HTMLAttributes<T>;
}

export interface NavItemData {
  text: string;
  targetId: string;
}

export interface Skill {
  name: string;
  path: string;
}

export interface UserContextType {
  user: UserModel | null;
  setUser: Dispatch<SetStateAction<UserModel | null>>;
}

export interface CourseContextType {
  courses: Courses | null;
  setCourses: Dispatch<SetStateAction<Courses | null>>;
  handleFetch(): void;
}

export interface TitleObject {
  title: string;
}

export interface Token {
  token: string;
}

export interface UserLogin {
  userId: number;
  username: string;
  password: string;
}

export interface Icon {
  icon: JSX.Element;
}

export interface CardData<T extends object> {
  data: T;
}

export interface UseAuthData {
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

export interface UseLoading {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}