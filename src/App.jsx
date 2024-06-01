/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import AboutCountry from "./Components/AboutCountry";
import { CountryProvider } from "./CountryContext";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

 
  return (
    <ThemeProvider theme={isLight ? LightTheme : DarkTheme}>
      <CountryProvider>
        <div className="App" >
          <Header onClick={toggleTheme} />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/AboutCountry" element={<AboutCountry />} />
          </Routes>
        </div>
      </CountryProvider>
    </ThemeProvider>
  );
}

export default App;
