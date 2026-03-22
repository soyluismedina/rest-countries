import Filters from "../components/Filters";
import ListOfCountries from "../components/ListOfCountries";
import { FilterContextProvider } from "../context/FilterContext";

export default function Home() {
  return (
    <FilterContextProvider>
      <Filters />
      <ListOfCountries />
    </FilterContextProvider>
  );
}
