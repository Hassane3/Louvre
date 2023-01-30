import React, { Children, useContext, useState } from "react";

const StateContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [isNavOpened, setIsNavOpened] = useState(false);

  const handleNavMenu = (isNavOpened) => {
    console.log("handle nav => ", isNavOpened);
    setIsNavOpened(isNavOpened);
  };

  return (
    <StateContext.Provider
      value={{ isNavOpened, setIsNavOpened, handleNavMenu }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const UseStateContext = () => useContext(StateContext);
