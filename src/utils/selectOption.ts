import {
  CONTINENTS,
  COUNTRIES,
  CurrencyType,
  CountryItemType,
  OptionItemKey,
  OptionsObjectKey,
} from "@/models";
import { useQuery } from "@apollo/client";

export const selectOption = (key: OptionItemKey) => {
  const { data: continentsData } = useQuery(CONTINENTS);
  const { data: countriesData } = useQuery(COUNTRIES);
  const options = {
    continents: continentsData?.continents,
    currencies: countriesData?.countries
      .map((c: CountryItemType) => c.currency)
      .filter(
        (v: CurrencyType, i: number, a: CurrencyType[]) =>
          a.indexOf(v) === i && v !== null
      ),
  };

  return options[key as OptionsObjectKey];
};
