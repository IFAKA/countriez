import { CountryItemType, Validator } from "@/models";

export const filterBy =
  (...validations: Validator[]) =>
  (countries: CountryItemType[]) =>
    validations.reduce(
      (valueReturned: CountryItemType[], validate: Validator) =>
        valueReturned?.filter((country: CountryItemType) => validate(country)),
      countries
    );
