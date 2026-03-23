"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  darkMode: false,
  setDarkMode: (value: boolean) => {},
});

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("themeModeRest");
      if (storedData) {
        setDarkMode(storedData === "false" ? false : true);
      }
    }
  }, []);

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
