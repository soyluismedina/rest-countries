"use client";
import { createContext, useEffect, useMemo, useState, Dispatch } from "react";
import { getCountries } from "../services/getCountries";
import { ICountry } from "../services/getFullCountry";

export const FilterContext = createContext<{
  filters: {
    name: string | null;
    region: ((countries: ICountry) => boolean) | null;
  };
  setFilters: Dispatch<{
    name: string | null;
    region: ((countries: ICountry) => boolean) | null;
  }>;
  matches: ICountry[];
  isLoading: boolean;
  countries: ICountry[];
}>({
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
  const [filters, setFilters] = useState<{
    name: string | null;
    region: ((countries: ICountry) => boolean) | null;
  }>({
    name: null,
    region: null,
  });

  const [countries, setCountries] = useState<ICountry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCountries().then((res) => {
      setIsLoading(false);
      setCountries(res);
    });
  }, []);

  const matches = useMemo(() => {
    let matches = countries;

    // Apply name filter if present
    if (filters.name) {
      matches = matches.filter((country) =>
        country.name.common.toLowerCase().includes(filters.name!.toLowerCase()),
      );
    }

    // Apply region filter if present
    if (filters.region) {
      matches = matches.filter(filters.region);
    }

    return matches;
  }, [countries, filters]);

  const data = {
    filters,
    setFilters,
    matches,
    isLoading,
    countries,
  };

  return (
    <FilterContext.Provider value={data}>{children}</FilterContext.Provider>
  );
}
