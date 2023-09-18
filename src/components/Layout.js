import React, { useEffect, useState } from "react";
import Topbar from "./global/Topbar";
import Sidebar from "./global/Sidebar";

function Layout() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  const toggleDarkMode = () => {
    setTheme(colorTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [colorTheme, theme]);

  return (
    <div className="flex relative">
      <Sidebar theme={theme} />
      <div className="flex flex-col bg-[#F2F8FF] w-full">
        <Topbar theme={theme} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
}

export default Layout;
