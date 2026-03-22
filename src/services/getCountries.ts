const URL =
  "https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,flags,tld,population,languages,currencies,borders";

export async function getCountries() {
  const res = await fetch(URL);
  const response = await res.json();
  const data = response;
  return data;
}
