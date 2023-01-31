import React, { useContext, useState } from "react";

const StateContext = React.createContext();

export const ContextProvider = ({ children }) => {
  // ***************** Const
  const [isNavOpened, setIsNavOpened] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  // ***************** Functions
  const handleNavMenu = (isNavOpened) => {
    console.log("handle nav => ", isNavOpened);
    setIsNavOpened(isNavOpened);
  };

  return (
    <StateContext.Provider
      value={{
        isNavOpened,
        setIsNavOpened,
        handleNavMenu,
        isVideoPlaying,
        setIsVideoPlaying,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const UseStateContext = () => useContext(StateContext);
