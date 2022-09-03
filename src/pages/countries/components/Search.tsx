import { SearchBox } from "../styled-components";
import Input from "./Input";
import Select from "./Select";

function Search() {
  return (
    <SearchBox>
      <Input />
      <Select type={"continents"} />
      <Select type={"currencies"} />
    </SearchBox>
  );
}

export default Search;
