import React, { useState, useEffect } from "react";
import Light from "../assets/day-mode.png";
import night from "../assets/night-mode.png";

const DarkMode = () => {
  const [theme, settheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  console.log(element);
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className="relative">
      <img
        src={Light}
        alt="light"
        onClick={() => settheme(theme === "light" ? "dark" : "light")}
        className={` w-12 cursor-pointer drop-shadow-md transition-all duration-300 absolute z-10 right-0 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={night}
        onClick={() => settheme(theme === "light" ? "dark" : "light")}
        alt="night"
        className={` w-12 cursor-pointer drop-shadow-md transition-all duration-300 ${
          theme === "light" ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default DarkMode;
