import { CountryContextType } from "@/models/models";
import { useContext } from "react";
import { CountryContext } from "../context/countryContext";
import { InputBox } from "../styled-components";

const Input = () => {
  const { searchValue, handleChange } = useContext(
    CountryContext
  ) as CountryContextType;
  return (
    <InputBox
      name="input"
      className="width:100%"
      value={searchValue.input}
      onChange={handleChange}
      placeholder="Search country by name"
    />
  );
};

export default Input;
