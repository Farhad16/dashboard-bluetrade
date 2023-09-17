import React, { useEffect, useState } from "react";
import Topbar from "./global/Topbar";

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
    <div className="content">
      <Topbar theme={theme} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default Layout;
