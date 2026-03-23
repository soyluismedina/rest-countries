export type ICountry = {
  capital: string[];
  region: string;
  subregion: string;
  timezones?: string[];
  continents?: string[];
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        official: string;
        common: string;
      };
      smo: {
        official: string;
        common: string;
      };
    };
  };
  currencies: {
    USD: {
      symbol: string;
      name: string;
    };
  };
  languages: Record<string, string>;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  population: number;
  tld: string[];
  borders: string[];
};

export async function getFullCountry(name: string): Promise<ICountry[]> {
  const URL = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
  const res = await fetch(URL);
  const response = await res.json();
  return response;
}
