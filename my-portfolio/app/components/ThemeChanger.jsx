"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { useTheme } from "next-themes";

const useLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  return loaded;
};

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const currentTheme = theme === "dark";
  const [isOn, setIsOn] = useState(false);
  const loaded = useLoaded();

  const toggleSwitch = () => {
    currentTheme == "dark" ? setTheme("light") : setTheme("dark");
    setIsOn(!isOn);
    /*     document.querySelector("html").style.backgroundColor = `${
      currentTheme == "dark" ? "#FAFAFA" : "#0F172A"
    }`; */
    console.log(theme + " " + currentTheme + " " + loaded);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };

  return (
    /*     <button className="fixed z-40 bottom-5 right-5 dark:bg-transparent dark:text-yellow-400 bg-transparent text-gray-900 w-10 h-10 rounded-full flex justify-center items-center">
      {light ? (
        <BsMoonStarsFill onClick={() => setTheme("dark")} size={27} />
      ) : (
        <BsFillSunFill onClick={() => setTheme("light")} size={27} />
      )}
    </button> */
    <div
      onClick={toggleSwitch}
      className="icon-toggler-container"
      data-darkmode={isOn}
      style={{ justifyContent: isOn ? "flex-end" : "flex-start" }}
    >
      <motion.div className="handle" layout transition={spring}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.i
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {currentTheme === "dark" && loaded ? (
              <RiMoonClearFill className="toggler-icon" />
            ) : (
              <RiSunFill className="toggler-icon" />
            )}
          </motion.i>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
