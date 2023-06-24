import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import Logo from "./Logo";
import ThemeChanger from "./ThemeChanger";
import SocialMedia from "./SocialMedia";

const navButtonOpenVariant = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 9.5L24 9.5" },
};

const navButtonCloseVariant = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  moving: { d: "M0 14.5L24 14.5" },
  closed: { d: "M0 14.5L15 14.5" },
};

const showLogoVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 0.5,
    },
  },
  closed: { y: -300, opacity: 0 },
};

const showSocialsVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 1.75,
    },
  },
  closed: { y: 300, opacity: 0 },
};

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [animation, setAnimation] = useState("closed");

  const handleNav = () => {
    setShowNav(!showNav);
    setAnimation("moving");
    setTimeout(() => {
      setAnimation(animation === "closed" ? "open" : "closed");
    }, 500);
    document.querySelector("body").style.overflow = showNav ? "auto" : "hidden";
  };

  return (
    <nav>
      <div
        id="navBar"
        className="flex justify-between items-center h-24 mx-auto px-4 text-zinc-800 bg-zinc-50 dark:text-zinc-50 dark:bg-slate-900 overflow-hidden"
      >
        <div className="z-40 flex flex-row items-center justify-center p-4">
          <Link href="/">
            <Logo width="50" height="50" />
          </Link>
        </div>
        <ul className="hidden md:flex z-40">
          <li className="p-4 font-medium hover:text-blue-400 transition duration-150 ease-in-out">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 font-medium hover:text-blue-400 transition duration-150 ease-in-out">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4 font-medium hover:text-blue-400 transition duration-150 ease-in-out">
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className="p-4 font-medium hover:text-blue-400 transition duration-150 ease-in-out">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="p-4">
            <ThemeChanger />
          </li>
        </ul>
        <div className="flex flex-row mr-3 justify-center items-center md:hidden z-50 cursor-pointer">
          {!showNav && <ThemeChanger />}
          <div onClick={handleNav}>
            <svg width="29" height="29" viewBox="0 0 29 29">
              <motion.path
                stroke="currentColor"
                animate={animation}
                variants={navButtonOpenVariant}
              />
              <motion.path
                stroke="currentColor"
                animate={animation}
                variants={navButtonCloseVariant}
              />
            </svg>
          </div>
        </div>
        <ul
          className={
            showNav
              ? "fixed z-40 flex flex-col justify-center items-center left-0 top-0 w-full h-screen bg-zinc-50 dark:bg-slate-900 ease-in-out duration-500"
              : "fixed z-40 flex flex-col justify-center items-center left-[-100%] top-0 w-full h-screen bg-zinc-50 dark:bg-slate-900 ease-in-out duration-500"
          }
        >
          <motion.li
            animate={showNav ? "open" : "closed"}
            variants={showLogoVariant}
            className="inline-flex fixed top-20 p-4"
          >
            <Link href="/" onClick={handleNav}>
              <Logo width="50" height="50" />
            </Link>
          </motion.li>
          <li className="text-zinc-900 dark:text-zinc-200 text-2xl hover:text-blue-400 w-full text-center p-4">
            <Link
              className="dark:hover:text-blue-400 transition duration-150 ease-in-out"
              href="/"
              onClick={handleNav}
            >
              Home
            </Link>
          </li>
          <li className="text-zinc-900 dark:text-zinc-200 text-2xl hover:text-blue-400 w-full text-center p-4">
            <Link
              className="dark:hover:text-blue-400 transition duration-150 ease-in-out"
              href="/about"
              onClick={handleNav}
            >
              About
            </Link>
          </li>
          <li className="text-zinc-900 dark:text-zinc-200 text-2xl hover:text-blue-400 w-full text-center p-4">
            <Link
              className="dark:hover:text-blue-400 transition duration-150 ease-in-out"
              href="/portfolio"
              onClick={handleNav}
            >
              Portfolio
            </Link>
          </li>
          <li className="text-zinc-900 dark:text-zinc-200 text-2xl hover:text-blue-400 w-full text-center">
            <Link
              className="dark:hover:text-blue-400 transition duration-150 ease-in-out"
              href="/contact"
              onClick={handleNav}
            >
              Contact
            </Link>
          </li>
          <div className="flex flex-col fixed justify-center items-center bottom-20 p-4">
            <motion.div
              animate={showNav ? "open" : "closed"}
              variants={showSocialsVariant}
            >
              <SocialMedia style={"inline-flex"} />
            </motion.div>
          </div>
        </ul>
      </div>
    </nav>
  );
}
