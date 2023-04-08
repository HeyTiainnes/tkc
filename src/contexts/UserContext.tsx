import { createContext } from "react";
import { User } from "../App";

const UserContext = createContext<User | null>(null);

export default UserContext;
