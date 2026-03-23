"use client";
import "./stylesHeader.css";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Link from "next/link";

export default function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    window.localStorage.setItem("themeModeRest", String(darkMode));
  }, [darkMode]);

  const handlClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className={`${darkMode ? "header" : "header headerLight"}`}>
      <div
        className={`${darkMode ? "header__container" : "header__container header_containerLight"} `}
      >
        <Link href="/">
          <p>Where in the world?</p>
        </Link>
        <div
          className={`${darkMode ? "themeMode" : "themeMode themeModeLight"}`}
          onClick={handlClick}
        >
          {darkMode ? <FaMoon /> : <FaRegMoon />}
          <p>Dark Mode</p>
        </div>
      </div>
    </header>
  );
}
