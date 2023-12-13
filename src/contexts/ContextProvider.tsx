import React, { useState, createContext, useContext } from "react";
import { User } from "../models/user";
import { Gm } from "../data/user";

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: (data: User | null) => void;
};
const UserContexts = createContext<UserContextType>({
  currentUser: Gm,
  setCurrentUser: () => null,
});

export const ContextProviders = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(Gm);
  return (
    <UserContexts.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContexts.Provider>
  );
};

export const UseUserContext = () => useContext(UserContexts);
