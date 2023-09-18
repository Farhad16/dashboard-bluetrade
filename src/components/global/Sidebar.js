import { Box, Divider, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import "react-pro-sidebar/dist/css/styles.css";
import logo from "../../assets/icons/Logo.png";
import { ReactComponent as Dashboard } from "../../assets/svgs/Dashboard.svg";
import { ReactComponent as Marketing } from "../../assets/svgs/Marketing.svg";
import { ReactComponent as Transactions } from "../../assets/svgs/Transaction.svg";
import { ReactComponent as Profile } from "../../assets/svgs/Profile.svg";
import { ReactComponent as Setting } from "../../assets/svgs/Setting.svg";
import { ReactComponent as Help } from "../../assets/svgs/Help.svg";
import { ReactComponent as Logout } from "../../assets/svgs/Logout.svg";

const Item = ({ title, isCollapsed, icon, selected, setSelected, theme }) => {
  return (
    <MenuItem
      active={selected === title}
      className={`${theme === "dark" ? "text-white" : "text-black"} my-1 ${
        isCollapsed ? "rounded-none" : "rounded-[10px]"
      }`}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

function Sidebar({ theme }) {
  const [isCollapsed, setisCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar": {
          borderRight: "1px solid #C4CACD !important",
        },
        "& .pro-sidebar-inner": {
          background: `${
            theme === "dark" ? "#1C1C25 !important" : "#fff !important"
          }`,
          minHeight: "100vh",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#3380FF !important",
          svg: {
            path: {
              fill: "#3380FF",
            },
          },
        },
        "& .pro-menu-item.active": {
          color: "#3380FF !important",
          background:
            theme === "light" ? "#D5E6FB !important" : "#062141 !important",
          borderRadius: isCollapsed ? "0px" : "10px",
          svg: {
            path: {
              fill: "#3380FF",
            },
          },
        },
        "& .pro-icon": {
          svg: {
            path: {
              fill: theme === "dark" ? "#FFFFFF" : "#000000",
            },
          },
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setisCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: theme === "dark" ? "#fff" : "#ddd",
            }}
          >
            {!isCollapsed && (
              <div className="flex flex-row justify-between ml-[15px] items-center">
                <div className="flex flex-row text-lg">
                  <img src={logo} alt="logo" className="w-10" />
                  <p>
                    <span className="text-medium text-blue-600 font-medium">
                      Blue
                    </span>
                    <span className="font-bold text-black dark:text-white">
                      Trade.
                    </span>
                  </p>
                </div>
                <IconButton onClick={() => setisCollapsed(!isCollapsed)}>
                  <MenuIcon
                    style={{
                      color: theme === "dark" ? "#fff" : "#ddd",
                    }}
                  />
                </IconButton>
              </div>
            )}
          </MenuItem>

          <Box
            paddingLeft={isCollapsed ? undefined : "10%"}
            paddingRight={isCollapsed ? undefined : "10%"}
            className="mt-6 gap-2 box"
          >
            <Item
              title="Dashboard"
              isCollapsed={isCollapsed}
              icon={<Dashboard />}
              selected={selected}
              setSelected={setSelected}
              theme={theme}
            />

            <Item
              title="Marketing"
              isCollapsed={isCollapsed}
              icon={<Marketing />}
              selected={selected}
              setSelected={setSelected}
              theme={theme}
            />
            <Item
              title="Transaction"
              isCollapsed={isCollapsed}
              icon={<Transactions />}
              selected={selected}
              setSelected={setSelected}
              theme={theme}
            />
            <Item
              title="Profile"
              isCollapsed={isCollapsed}
              icon={<Profile />}
              selected={selected}
              setSelected={setSelected}
              theme={theme}
            />
            <Item
              title="Setting"
              isCollapsed={isCollapsed}
              icon={<Setting />}
              selected={selected}
              setSelected={setSelected}
              theme={theme}
            />
            <Divider className="h-[2px] w-[60%] bg-gray-100 !my-8 !ml-6" />
            <Item
              title="Help"
              isCollapsed={isCollapsed}
              icon={<Help />}
              selected={selected}
              setSelected={setSelected}
              theme={theme}
            />
            <Item
              title="Logout"
              isCollapsed={isCollapsed}
              icon={<Logout />}
              selected={selected}
              setSelected={setSelected}
              theme={theme}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}

export default Sidebar;
