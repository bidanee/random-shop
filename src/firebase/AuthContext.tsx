import { User } from "firebase/auth";
import React, { createContext } from "react";

// export const AuthContext = React.createContext<User | null>(null);
export const AuthContext = createContext(null);
