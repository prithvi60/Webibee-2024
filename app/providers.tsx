"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export function Providers({ children }: { children: React.ReactNode }) {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <NextUIProvider>{children}</NextUIProvider>
    </ApolloProvider>
  );
}
