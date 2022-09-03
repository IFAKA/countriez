import { ApolloError } from "@apollo/client";
import { ChangeEvent } from "react";

export interface ICountry {
  code: string;
  name: string;
  currency: string;
  continent: IContinent;
  languages: ILanguages[];
  capital: string;
}

export interface IContinent {
  name: string;
}

export interface ILanguages {
  name: string;
}

export type CountryItemType = Omit<ICountry, "languages" | "capital">;

export const EmptyCountry = {
  code: "It doesn't have",
  name: "It doesn't have",
  currency: "It doesn't have",
  continent: {
    name: "It doesn't have",
  },
  languages: [
    {
      name: "It doesn't have",
    },
  ],
  capital: "It doesn't have",
};

export const EmptyContinent = {
  name: "",
};

export const EmptyCountryItem = {
  code: "",
  continent: EmptyContinent,
  currency: "",
  name: "",
};

const CurrencyArray = [
  "EUR",
  "AED",
  "AFN",
  "XCD",
  "ALL",
  "AMD",
  "AOA",
  "ARS",
  "USD",
  "AUD",
  "AWG",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "XOF",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB,BOV",
  "BRL",
  "BSD",
  "BTN,INR",
  "NOK",
  "BWP",
  "BYN",
  "BZD",
  "CAD",
  "CDF",
  "XAF",
  "CHE,CHF,CHW",
  "NZD",
  "CLF,CLP",
  "CNY",
  "COP",
  "CRC",
  "CUC,CUP",
  "CVE",
  "ANG",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EGP",
  "MAD,DZD,MRU",
  "ERN",
  "ETB",
  "FJD",
  "FKP",
  "GBP",
  "GEL",
  "GHS",
  "GIP",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG,USD",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KMF",
  "KPW",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "CHF",
  "LKR",
  "LRD",
  "LSL,ZAR",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRU",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MYR",
  "MZN",
  "NAD,ZAR",
  "XPF",
  "NGN",
  "NIO",
  "NPR",
  "OMR",
  "PAB,USD",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SHP",
  "SLL",
  "SOS",
  "SRD",
  "SSP",
  "STN",
  "SVC,USD",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "USD,USN,USS",
  "UYI,UYU",
  "UZS",
  "VES",
  "VND",
  "VUV",
  "WST",
  "YER",
  "ZAR",
  "ZMW",
  "USD,ZAR,BWP,GBP,AUD,CNY,INR,JPY",
] as const;
export type CurrencyType = typeof CurrencyArray[number];

export interface ISearchState {
  input: string;
  continents: string;
  currencies: string;
}

export const EmptySearchState = {
  input: "",
  continents: "All",
  currencies: "All",
};

export const EmptyOptions = {
  continents: "",
  currencies: "",
};

export interface ISelectProps {
  type: OptionKeyType;
}
export interface IChildProps {
  children: React.ReactNode;
}
export interface HandlerProps {
  data: ICountry | CountryItemType[];
  loading: boolean;
  error: ApolloError | undefined;
}
export type ContinentType = { name: string };
export type OptionItemKey = string | ContinentType;
export type SearchObjectKey = keyof typeof EmptySearchState;
export type OptionsObjectKey = keyof typeof EmptyOptions;
export type Validator = (country: CountryItemType) => boolean;
export type OptionKeyType = "continents" | "currencies";
export type EventType = ChangeEvent<HTMLInputElement | HTMLSelectElement>;
export type CountryContextType = {
  searchValue: ISearchState;
  handleChange: (e: EventType) => void;
};
