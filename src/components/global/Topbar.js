import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import bell from "../../assets/icons/bell.png";
import bellW from "../../assets/icons/bellW.png";
import AvatarImg from "../../assets/icons/avatar.svg";
import MoreOptionPopover from "../MoreOptionPopover";

function Topbar({ theme, toggleDarkMode }) {
  const user = {
    Avatar: <img src={AvatarImg} className="w-10 h-10" alt="avatar" />,
    name: "Andy Warhol",
    email: "andywarhol@mail.com",
  };

  return (
    <div className="flex flex-row justify-between items-center px-6 py-4 bg-white dark:bg-[#1C1C25] gap-8">
      <div className="w-1/2">
        <TextField
          variant="outlined"
          placeholder="Search"
          className="w-full"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ fill: "#626D7D" }} />
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
              border: "1px solid #C4CACD",
            },
          }}
          InputLabelProps={{
            style: {
              color: "#C4CACD",
            },
          }}
          inputProps={{
            "::placeholder": { color: "#626D7D" },
            "::focus": {
              border: "1px solid #C4CACD !important",
            },
          }}
        />
      </div>

      <div className="flex flex-row items-center justify-end lg:gap-6 gap-4">
        {theme === "dark" ? (
          <img src={bellW} alt="bell" className="w-5 h-5" />
        ) : (
          <img src={bell} alt="bellw" className="w-5 h-5" />
        )}
        <div className="hidden lg:flex flex-row items-center gap-2 lg:gap-3 bg-[#F2F8FF] dark:bg-[#131313] px-3 py-2 rounded-xl">
          {user.Avatar}
          <p className="flex flex-col gap-[2px]">
            <span className="text-sm dark:text-white font-semibold">
              {user.name}
            </span>
            <span className="text-xs text-[#5E6E78] font-medium">
              {user.email}
            </span>
          </p>
          <MoreOptionPopover toggleDarkMode={toggleDarkMode}>
            <MoreVertIcon sx={{ color: "#A2A7B4" }} />
          </MoreOptionPopover>
        </div>
        <div className="lg:hidden flex">
          <MoreOptionPopover toggleDarkMode={toggleDarkMode} user={user}>
            <MoreVertIcon sx={{ color: "#A2A7B4" }} />
          </MoreOptionPopover>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
