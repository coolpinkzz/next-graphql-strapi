import {gql} from "@apollo/client";
import client from "../pages/lib/apolloClient";


export default async function fetchProduct() {
    const {data} = await client.query({
        query: gql`
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
    `,
    });
    return data.products.data
}