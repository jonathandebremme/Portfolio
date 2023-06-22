"use client";

import { usePathname } from "next/navigation";
import Navbar from "./NavBar";
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
