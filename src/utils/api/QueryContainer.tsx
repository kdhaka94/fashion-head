import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const QueryContainer = ({ children }: { children: React.ReactNode }) => {
  const queryClientRef = React.useRef<any>(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      {children}
    </QueryClientProvider>
  );
};
