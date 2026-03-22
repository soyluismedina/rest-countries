"use client";
import { useContext, useState } from "react";
import { FilterContext } from "../../context/FilterContext";
import { ThemeContext } from "../../context/ThemeContext";

export default function FilterSelect() {
  const [select, setSelect] = useState("");
  const { filters, setFilters } = useContext(FilterContext);
  const { darkMode } = useContext(ThemeContext);

  const onChange = (filter) => {
    setFilters({ ...filters, region: filter });
  };

  const handleChange = (value) => {
    setSelect(value);
    onChange(value ? (countries) => countries.region.includes(value) : null);
  };

  return (
    <div className={`${darkMode ? "select" : "select selectLight"}`}>
      <select
        name="filter"
        id="filter"
        value={select}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="default" hidden>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
