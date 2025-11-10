"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store/store";
import "./globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create one query client for the whole app
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body>
        <ReduxProvider store={store}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
