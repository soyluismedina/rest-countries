import { ICountry } from "@/services/getFullCountry";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./stylesCountry.css";

export default function Country({
  flags,
  name,
  population,
  region,
  capital,
}: Pick<ICountry, "flags" | "name" | "population" | "region" | "capital">) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Link href={`/country/${name.common}`}>
      <div className={`${darkMode ? "country" : "country countryLight"}`}>
        <img className="country__image" loading="lazy" src={flags.svg} alt="" />
        <div className="country__containerText">
          <h2 className="country__name">{name.common}</h2>
          <h3>
            Population: <span>{population.toLocaleString()}</span>
          </h3>
          <h3>
            Region: <span>{region}</span>
          </h3>
          {capital && (
            <h3>
              Capital: <span>{capital}</span>
            </h3>
          )}
        </div>
      </div>
    </Link>
  );
}
