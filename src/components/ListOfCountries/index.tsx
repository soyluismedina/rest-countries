"use client";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import { ThemeContext } from "../../context/ThemeContext";
import Country from "../Country";
import Spinner from "../Spinner";
import "./stylesList.css";
import { ICountry } from "@/services/getFullCountry";

function ListOfCountries() {
  const { isLoading, matches } = useContext(FilterContext);
  const { darkMode } = useContext(ThemeContext);

  const compare_name = (a: ICountry, b: ICountry) => {
    if (a.name.common.toLowerCase() < b.name.common.toLowerCase()) {
      return -1;
    }
    if (a.name.common.toLowerCase() > b.name.common.toLowerCase()) {
      return 1;
    }
    return 0;
  };

  if (isLoading) return <Spinner />;
  return (
    <section className="listOfCountries">
      {matches.length <= 0 ? (
        <div
          className={`${darkMode ? "withoutMatches" : "withoutMatches withoutMatchesLight"}`}
        >
          <p>There is no matches...</p>
        </div>
      ) : (
        matches
          ?.sort(compare_name)
          ?.map(({ name, flags, population, capital, region }) => (
            <Country
              key={flags.svg}
              name={name}
              flags={flags}
              population={population}
              capital={capital}
              region={region}
            />
          ))
      )}
    </section>
  );
}

export default ListOfCountries;
