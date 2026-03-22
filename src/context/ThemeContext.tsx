"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext({
  darkMode: false,
  setDarkMode: (value: boolean) => {},
});

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("themeModeRest") as string) || false,
  );

  function handleDarkMode(darkMode: boolean) {
    setDarkMode(darkMode);
  }

  const data = { darkMode, setDarkMode: handleDarkMode };

  return (
    <ThemeContext.Provider value={data}>
      <div className={`${darkMode ? "App" : "App Applight"}`}>{children}</div>
    </ThemeContext.Provider>
  );
}
