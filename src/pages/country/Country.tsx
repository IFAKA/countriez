import { useCountry } from "@/hooks";
import { ILanguages } from "@/models";
import { ButtonBox } from "@/styled-components";
import { useNavigate } from "react-router-dom";
import { CountryDetailsBox } from "./styled-components";

const Country = () => {
  const { country, ErrorHandler } = useCountry();
  const navigateTo = useNavigate();
  return (
    <ErrorHandler>
      <ButtonBox onClick={() => navigateTo(-1)}>&#8592;</ButtonBox>
      <CountryDetailsBox>
        <div>Code: {country?.code}</div>
        <div>Name: {country?.name}</div>
        <div>Currency: {country?.currency}</div>
        <div>Continent: {country?.continent.name}</div>
        <div>
          Languages:{" "}
          {country?.languages.map((langs: ILanguages) => langs.name).join(",")}
        </div>
        <div>Capital: {country?.capital ?? ""}</div>
      </CountryDetailsBox>
    </ErrorHandler>
  );
};

export default Country;
