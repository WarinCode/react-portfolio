import { createContext, Context } from "react";
import { UserContextType } from "../../types";

const UserContext: Context<UserContextType | null> = createContext<UserContextType | null>(null);
export default UserContext;
