import React, { useEffect, useState } from "react";
import Topbar from "./global/Topbar";
import Sidebar from "./global/Sidebar";
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
