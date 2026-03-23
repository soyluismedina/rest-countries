"use client";
import { useEffect, useState } from "react";
import FullCountry from "../../components/FullCountry";
import Spinner from "../../components/Spinner";
import { getCountryByCode } from "../../services/getCountryByCode";
import { getFullCountry, ICountry } from "../../services/getFullCountry";
import { useParams } from "next/navigation";

export default function CountrySingle() {
  const { name, code } = useParams();
  const [country, setCountry] = useState<ICountry[] | null>(null);

  useEffect(() => {
    {
      name && getFullCountry(name as string).then(setCountry);
    }
    {
      code && getCountryByCode(code as string).then(setCountry);
    }
  }, [code, name]);

  return (
    <>
      {country === null ? (
        <Spinner />
      ) : (
        country?.map(
          ({
            name,
            capital,
            region,
            subregion,
            flags,
            tld,
            population,
            languages,
            currencies,
            borders,
          }) => (
            <FullCountry
              key={name.common}
              name={name}
              capital={capital}
              region={region}
              subregion={subregion}
              flags={flags}
              tld={tld}
              currencies={currencies}
              population={population}
              languages={languages}
              borders={borders}
            />
          ),
        )
      )}
    </>
  );
}
