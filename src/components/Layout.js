import React from "react";
import Sidebar from "./global/Sidebar";
import Topbar from "./global/Topbar";
import useThemeMode from "./hooks/useThemeMode";

function Layout({ children }) {
  const { toggleDarkMode, theme } = useThemeMode();

  return (
    <div className="flex relative">
      <Sidebar theme={theme} />
      <div className="flex flex-col dark:bg-[#12131A] bg-[#F2F8FF] w-full">
        <Topbar theme={theme} toggleDarkMode={toggleDarkMode} />
        {children}
      </div>
    </div>
  );
}

export default Layout;
