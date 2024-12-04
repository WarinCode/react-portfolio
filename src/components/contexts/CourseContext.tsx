import { createContext, Context } from "react";
import { CourseContextType } from "../../types";

const CourseContext: Context<null | CourseContextType> = createContext<null | CourseContextType>(null);
export default CourseContext;
