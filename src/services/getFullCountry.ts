export async function getFullCountry(name: string) {
  const URL = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
  const res = await fetch(URL);
  const response = await res.json();
  console.log({ response });
  return response;
}
