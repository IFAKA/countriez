import { createContext, useState } from "react";
import {
  ISearchState,
  SearchObjectKey,
  EmptySearchState,
  CountryContextType,
  IChildProps,
  EventType,
} from "@/models";

export const CountryContext = createContext<CountryContextType | null>(null);

const CountryProvider = ({ children }: IChildProps) => {
  const [searchValue, setSearchValue] =
    useState<ISearchState>(EmptySearchState);

  const handleChange = (e: EventType) => {
    const key = e.target.name;
    const value = e.target.value;
    setSearchValue((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <CountryContext.Provider value={{ searchValue, handleChange }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
