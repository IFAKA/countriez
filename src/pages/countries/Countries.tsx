import { CountryList, Search } from "./components";
import CountryProvider from "./context/countryContext";

const Countries = () => {
  return (
    <CountryProvider>
      <Search />
      <CountryList />
    </CountryProvider>
  );
};

export default Countries;
