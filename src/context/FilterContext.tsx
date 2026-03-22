"use client";
import { createContext, useEffect, useMemo, useState } from "react";
import { getCountries } from "../services/getCountries";

export const FilterContext = createContext({
  filters: { name: null, region: null },
  setFilters: () => {},
  matches: [],
  isLoading: true,
  countries: [],
});

export function FilterContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filters, setFilters] = useState({
    name: null,
    region: null,
  });

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCountries().then((res) => {
      console.log({ res });
      setIsLoading(false);
      setCountries(res);
    });
  }, []);

  const matches = useMemo(() => {
    const filtersToAplly = Object.values(filters).filter(Boolean);
    let matches = countries;

    for (let filter of filtersToAplly) {
      matches = matches.filter(filter);
    }
    return matches;
  }, [countries, filters]);

  const data = { filters, setFilters, matches, isLoading, countries };

  return (
    <FilterContext.Provider value={data}>{children}</FilterContext.Provider>
  );
}
