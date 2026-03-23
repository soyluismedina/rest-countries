"use client";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import { ThemeContext } from "../../context/ThemeContext";
import { ICountry } from "@/services/getFullCountry";

function FilterText() {
  const { filters, setFilters } = useContext(FilterContext);
  const { darkMode } = useContext(ThemeContext);

  const onChange = (filter: string | null) => {
    setFilters({ ...filters, name: filter });
  };

  const handleChange = (value: string) => {
    onChange(value || null);
  };

  return (
    <div
      className={`${darkMode ? "input__container" : "input__container input__containerLight"}`}
    >
      <div className={`${darkMode ? "icon" : "icon iconLight"}`}></div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for a country..."
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default FilterText;
