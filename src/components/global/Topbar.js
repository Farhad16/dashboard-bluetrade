import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Avatar } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import bell from "../../assets/icons/bell.png";
import bellW from "../../assets/icons/bellW.png";

function Topbar({ theme, toggleDarkMode }) {
  return (
    <div className="grid grid-cols-2 px-6 py-4 w-full border border-red">
      <div className="w-full col-span-1">
        <TextField
          variant="outlined"
          placeholder="Search"
          className="w-full"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            disableUnderline: true,
            classes: {
              root: "no-hover",
            },
            style: {
              borderRadius: "100px",
              color: theme === "dark" ? "white" : "black",
              // padding: "0px 10px",
            },
          }}
          InputLabelProps={{
            style: {
              color: "#C4CACD",
            },
          }}
        />
      </div>

      <div className="flex flex-row items-center justify-end gap-6">
        {theme === "dark" ? (
          <img src={bellW} alt="bell" className="w-5" />
        ) : (
          <img src={bell} alt="bellw" className="w-5" />
        )}
        <div className="flex flex-row items-center gap-3 bg-[#F0F8FF] px-3 py-2 rounded-xl">
          <Avatar />
          <p className="flex flex-col gap-[2px]">
            <span className="text-sm dark:text-white font-semibold">
              Andy Warhol
            </span>
            <span className="text-xs text-[#5E6E78] font-medium">
              andywarhol@mail.com
            </span>
          </p>
          <MoreVertIcon sx={{ color: "#A2A7B4" }} />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
