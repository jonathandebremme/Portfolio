"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const LayoutProvider = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      <Navbar />
      {children}
      {pathname !== "/" && <Footer />}
    </>
  );
};
