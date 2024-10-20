// scripts/ColorContext.js
import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [fav_color, setFavColor] = useState(""); // default color can be set here

  return (
    <ColorContext.Provider value={{ fav_color, setFavColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  return useContext(ColorContext);
};
