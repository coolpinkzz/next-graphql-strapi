
import gql from 'graphql-tag';

const GET_PRODUCTS = gql`
  query {
        products {
          data {
            attributes {
              name
              desc
              image_url {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
`;

export default GET_PRODUCTS;