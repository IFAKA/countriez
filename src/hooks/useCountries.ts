import { useQuery } from "@apollo/client";
import { FC, useContext, useEffect, useState } from "react";
import {
  CountryContextType,
  CountryItemType,
  EmptyCountryItem,
  EmptySearchState,
} from "../models/models";
import { createErrorHandler, filterBy } from "@/utils";
import { COUNTRIES } from "@/models";
import { CountryContext } from "@/pages/countries/context/countryContext";

export const useCountries = () => {
  const [filteredCountries, setFilteredCountries] = useState<CountryItemType[]>([
    EmptyCountryItem,
  ]);
  const { searchValue } = useContext(CountryContext) as CountryContextType;
  const { data, error, loading } = useQuery(COUNTRIES);
  const ErrorHandler = createErrorHandler({ data, error, loading }) as FC<any>;

  const inputValue = (country: CountryItemType) =>
    country?.name?.toLowerCase().includes(searchValue.input.toLowerCase());

  const continent = (country: CountryItemType) =>
    searchValue.continents == EmptySearchState.continents ||
    country?.continent?.name?.includes(searchValue.continents);

  const currency = (country: CountryItemType) =>
    searchValue.currencies == EmptySearchState.currencies ||
    country?.currency?.includes(searchValue.currencies);

  useEffect(() => {
    setFilteredCountries(
      filterBy(inputValue, continent, currency)(data?.countries)
    );
  }, [searchValue, data]);

  return { filteredCountries, ErrorHandler };
};
