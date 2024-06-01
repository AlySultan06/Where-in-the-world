/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";

// Create a context
const CountryContext = createContext();

// Create a provider component
export const CountryProvider = ({ children }) => {
  const [countryInfo, setCountryInfo] = useState({});

  return (
    <CountryContext.Provider value={[countryInfo, setCountryInfo]}>
     {children}
    </CountryContext.Provider>
  );
};

// Create a custom hook to consume the context
export const useCountryInfo = () => useContext(CountryContext);