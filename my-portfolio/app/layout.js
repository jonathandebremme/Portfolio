import "./globals.css";

import { Suspense } from "react";
import Loading from "./loading";

import Providers from "./components/ThemeProvider";
import { LayoutProvider } from "./components/LayoutProvider";

export const metadata = {
  title: "Jonathan De Bremme",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <Suspense fallback={<Loading />}>
        <body className=" text-zinc-800 bg-zinc-50 dark:text-zinc-50 dark:bg-slate-900">
          <Providers>
            <LayoutProvider>{children}</LayoutProvider>
          </Providers>
        </body>
      </Suspense>
    </html>
  );
}
