import React from "react";
import { render } from "react-dom";
import { register as registerServiceWorker } from "./serviceWorker";

import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { withClientState } from "apollo-link-state";
import { defaults, typeDefs, resolvers } from "./schema";

import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import App from "./components/App";

const cache = new InMemoryCache();
const storage = window.localStorage;

const createClient = () =>
  new ApolloClient({
    cache,
    link: withClientState({ defaults, typeDefs, resolvers })
  });

const renderApp = () => {
  const client = createClient();
  render(
    <ApolloProvider client={client}>
      <ApolloProviderHooks client={client}>
        <App />
      </ApolloProviderHooks>
    </ApolloProvider>,
    document.getElementById("root")
  );

  registerServiceWorker();
};

persistCache({
  cache: cache,
  storage: storage,
  key: "nms-taxonomy-v1"
})
  .then(renderApp)
  .catch(error => console.error(error));
