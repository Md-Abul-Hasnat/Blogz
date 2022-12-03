import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const MainContext = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  console.log(user);
  return (
    <GlobalContext.Provider value={{ setUser, user }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default MainContext;
