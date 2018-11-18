import React from "react";
import { render } from "react-dom";
import { register as registerServiceWorker } from "./serviceWorker";

import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { withClientState } from "apollo-link-state";
import { defaults, typeDefs, resolvers } from "./schema";

import { ApolloProvider } from "react-apollo";
import App from "./components/App";

const cache = new InMemoryCache();
persistCache({
  cache,
  storage: window.localStorage
});

const client = new ApolloClient({
  cache,
  link: withClientState({ defaults, typeDefs, resolvers })
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

registerServiceWorker();
