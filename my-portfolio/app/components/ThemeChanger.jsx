"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { useTheme } from "next-themes";

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  console.log(systemTheme + " " + theme);
  const toggleSwitch = () => {
    currentTheme == "dark" ? setTheme("light") : setTheme("dark");
    setIsOn(!isOn);
    console.log(theme + " " + currentTheme);
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };

  return (
    <div
      onClick={toggleSwitch}
      className="icon-toggler-container"
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
            {currentTheme === "dark" ? (
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
