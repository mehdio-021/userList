import React, { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeButton = () => {
  const saveTheme = JSON.parse(localStorage.getItem("theme") || "[]");
  const [theme, setTheme] = useState(
    saveTheme.length !== 0 ? saveTheme : "light"
  );

  useEffect(() => {
    if (saveTheme.length === 0) {
      localStorage.setItem("theme", JSON.stringify("light"));
      setTheme("light");
    }
    console.log(theme);
    theme === "light"
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  }, []);

  const darkModeHandler = () => {
    const theme = JSON.parse(localStorage.getItem("theme") || "[]");
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", JSON.stringify("dark"));
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", JSON.stringify("light"));
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className=" absolute top-2 right-2 z-20 w-[60px] flex items-center justify-center rounded-lg border border-slate-400 px-4 py-2 text-lg shadow-lg dark:border-2 dark:border-slate-400 lg:cursor-pointer bg-gray-200 dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-400 mb-5"
      onClick={darkModeHandler}
    >
      {theme === "dark" ? (
        <MdDarkMode className="text-lg text-white/80 cursor-pointer" />
      ) : (
        <MdLightMode className="text-lg text-yellow-500 cursor-pointer" />
      )}
    </div>
  );
};

export default ThemeButton;
