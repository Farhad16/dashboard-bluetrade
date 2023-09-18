import { IconButton } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Popover from "@mui/material/Popover";
import Switch from "@mui/material/Switch";
import React, { useState } from "react";

const MoreOptionPopover = ({ children, toggleDarkMode, user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    toggleDarkMode();
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <IconButton color="inherit" onClick={handleOpenPopover}>
        {children}
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <List>
          {user && (
            <ListItem className="md:flex hidden gap-3">
              {user?.Avatar}
              <p className="flex flex-col gap-[2px]">
                <span className="text-sm text-black font-semibold">
                  {user?.name}
                </span>
                <span className="text-xs text-[#5E6E78] font-medium">
                  {user?.email}
                </span>
              </p>
            </ListItem>
          )}
          <ListItem>
            <FormControlLabel
              control={
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  color="primary" // You can change the color to 'secondary' or 'default'
                />
              }
              label="Dark mode"
            />
          </ListItem>
        </List>
      </Popover>
    </div>
  );
};

export default MoreOptionPopover;
