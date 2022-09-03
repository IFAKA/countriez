import { useQuery } from "@apollo/client";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FIND_COUNTRY } from "../models/queries";
import { ICountry, EmptyCountry } from "../models/models";
import { createErrorHandler } from "@/utils";

export const useCountry = () => {
  const [country, setCountry] = useState<ICountry>(EmptyCountry);
  const { code } = useParams();
  const { data, error, loading } = useQuery(FIND_COUNTRY, {
    variables: { code },
  });
  const ErrorHandler = createErrorHandler({ data, error, loading }) as FC<any>;

  const cleanProps = (country: ICountry) => {
    const { code, name, currency, continent, languages, capital } = country;

    !!code && setCountry((s) => ({ ...s, code }));
    !!name && setCountry((s) => ({ ...s, name }));
    !!currency && setCountry((s) => ({ ...s, currency }));
    !!continent && setCountry((s) => ({ ...s, continent }));
    !!languages.length && setCountry((s) => ({ ...s, languages }));
    !!capital && setCountry((s) => ({ ...s, capital }));
  };

  useEffect(() => {
    data && cleanProps(data?.country);
  }, [data]);

  return { country, ErrorHandler };
};
