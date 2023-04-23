import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://balanced-bengal-51.hasura.app/v1/graphql",
  cache: new InMemoryCache({ addTypename: false }),
  headers: {
    "x-hasura-admin-secret": "Qsw9CUGpws705YGLhLpi8Vn71JcX4zDlxmLl1w3HnKwygU7RAAg246t7122GXVuO",
  },
});
