import { useEffect, useState } from "react";

const useThemeMode = () => {
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

  return { toggleDarkMode, theme };
};

export default useThemeMode;
