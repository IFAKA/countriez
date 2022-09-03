import { gql } from "@apollo/client";

export const FIND_COUNTRY = gql`
  query countryByCode($code: ID!) {
    country(code: $code) {
      code
      name
      currency
      continent {
        name
      }
      languages {
        name
      }
      capital
    }
  }
`;

export const COUNTRIES = gql`
  query {
    countries {
      name
      code
      currency
      continent {
        name
      }
    }
  }
`;

export const CONTINENTS = gql`
  query {
    continents {
      name
    }
  }
`;
