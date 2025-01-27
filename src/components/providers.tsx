"use client";

import { createConfig } from "@alchemy/aa-alchemy/config";
import { AlchemyAccountProvider } from "@alchemy/aa-alchemy/react";
import { arbitrumSepolia } from "@alchemy/aa-core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, Suspense } from "react";
import { ThemeProvider } from "./theme-provider";

const queryClient = new QueryClient();
const config = createConfig({
  rpcUrl: "/api/rpc",
  chain: arbitrumSepolia,
});

export const Providers = (props: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Suspense>
        <QueryClientProvider client={queryClient}>
          <AlchemyAccountProvider config={config} queryClient={queryClient}>
            {props.children}
          </AlchemyAccountProvider>
        </QueryClientProvider>
      </Suspense>
    </ThemeProvider>
  );
};
