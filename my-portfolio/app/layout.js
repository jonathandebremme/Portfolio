import "./globals.css";

import { Suspense } from "react";
import Loading from "./loading";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Providers from "./components/ThemeProvider";
import ThemeChanger from "./components/ThemeChanger";

export const metadata = {
  title: "Jonathan De Bremme",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className=" text-zinc-800 bg-zinc-50 dark:text-zinc-50 dark:bg-slate-900">
        <Suspense fallback={<Loading />}>
          <Navbar />
          <Providers>
            <div className="overflow-x-hidden">
              <ThemeChanger />
              {children}
            </div>
          </Providers>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
