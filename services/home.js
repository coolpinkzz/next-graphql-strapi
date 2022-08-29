import { gql } from "@apollo/client";
import client from "../pages/lib/apolloClient";

export default async function fetchHome() {
  const { data } = await client.query({
    query: gql`
      query {
        home {
          data {
            attributes {
              title
              description
            }
          }
        }
      }
    `,
  });
  return data.home.data.attributes;
}
