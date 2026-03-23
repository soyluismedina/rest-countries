export async function getCountryByCode(code: string) {
  const URL = `https://restcountries.com/v3.1/alpha/${code}`;
  const res = await fetch(URL);
  const response = await res.json();
  const data = response;
  return data;
}
