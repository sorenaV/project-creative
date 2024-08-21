"use client";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { FilterType } from "../_confing/FilterConfing";

// Shall i also add type to this props?

function FilterItem({ itemList }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={itemList.icon}
      >
        <Box
          component="span"
          sx={{
            display: { xs: "none", md: "inline" }, // Show text only on small screens
          }}
        >
          {itemList.label}
        </Box>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {itemList.menuList.map((menuList, i) => (
          <MenuItem key={menuList[i]} onClick={handleClose}>
            {itemList.menuList[i]}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default FilterItem;
