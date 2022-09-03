import { useContext } from "react";
import {
  CountryContextType,
  ISelectProps,
  OptionItemKey,
} from "@/models";
import { CountryContext } from "../context/countryContext";
import { SelectBox } from "../styled-components";
import { selectOption } from "@/utils";

const Select = ({ type }: ISelectProps) => {
  const { handleChange } = useContext(CountryContext) as CountryContextType;
  const options = selectOption(type);

  return (
    <div>
      <label htmlFor={type}>Filter by {type}:</label>
      <SelectBox name={type} id={type} onChange={handleChange}>
        <option>All</option>
        {options?.map((opt: OptionItemKey) => (
          <option key={typeof opt === "string" ? opt : opt?.name}>
            {typeof opt === "string" ? opt : opt?.name}
          </option>
        ))}
      </SelectBox>
    </div>
  );
};

export default Select;
