import Filters from "@/components/Filters";
import ListOfCountries from "@/components/ListOfCountries";
import { FilterContextProvider } from "@/context/FilterContext";

export default function Page() {
  return (
    <div>
      <FilterContextProvider>
        <Filters />
        <ListOfCountries />
      </FilterContextProvider>
    </div>
  );
}
