import React from "react";
import { createContext, useState } from "react";

export const Contexts = createContext();

export const AuthContextProvider = (props) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const initialToken = localStorage.getItem("LocalToken");
  const [token, setToken] = useState();
  const [isUserID, setIsUserID] = useState(null);

  const [isContentAvailable, setIsContentAvailable] = useState();

  const sessionToken = "";
  const userIsLoggedInWithToken = !!token;

  return (
    <Contexts.Provider
      value={{
        isUserLoggedIn,
        isContentAvailable,
        setIsContentAvailable,
        setIsUserLoggedIn,
        token,
        setToken,
        sessionToken,
        userIsLoggedInWithToken,
        isUserID,
        setIsUserID,
      }}
    >
      {props.children}
    </Contexts.Provider>
  );
};
