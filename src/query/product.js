import { gql } from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
  query {
    category {
      name
      products {
        id
        name
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        gallery
      }
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query getCategoryByName($input: CategoryInput) {
    category(input: $input) {
      name
      products {
        id
        name
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        gallery
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query GetProductById($id: String!) {
    product(id: $id) {
      name
      description
      brand
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      gallery
    }
  }
`;
