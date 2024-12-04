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
  courses: Courses;
  setCourses: Dispatch<SetStateAction<Courses>>;
  handleFetch(): Promise<void>;
}

export interface TitleObject {
  title: string;
}
