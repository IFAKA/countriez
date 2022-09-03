import { useCountries } from "@/hooks";
import { CountryItemType } from "@/models";
import { useNavigate } from "react-router-dom";
import { ItemBox, ListBox } from "../styled-components";

const CountryList = () => {
  const { filteredCountries, ErrorHandler } = useCountries();
  const navigateTo = useNavigate();
  return (
    <ErrorHandler>
      <ListBox>
        {!!filteredCountries?.length ? (
          <>
            <h4>Click on the name to see info.</h4>
            {filteredCountries?.map((c: CountryItemType) => (
              <ItemBox
                key={c.code}
                onClick={() => navigateTo(`/country/${c.code}`)}
              >
                {c.name}
              </ItemBox>
            ))}
          </>
        ) : (
          <div>Country not found.</div>
        )}
      </ListBox>
    </ErrorHandler>
  );
};

export default CountryList;
