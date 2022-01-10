import React from "react";
import { createContext, useState } from "react";

export const TweetContexts = createContext();

export const TweetContextsProvider = (props) => {

    const [isPostAvailable, setIsPostAvailable] = useState([]);

  return (
    <TweetContexts.Provider
      value={{ isPostAvailable, setIsPostAvailable}}>
      {props.children}
    </TweetContexts.Provider>
  );
};
