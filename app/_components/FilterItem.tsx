"use client";
import { useState } from "react";

import type { FilterOptionsType } from "../_types";

import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";

type FilterItem = {
  menuList: FilterOptionsType;
};

export default function FilterItem({ menuList }: FilterItem) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="positioned-button"
        aria-controls={open ? "positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={menuList.icon}
      >
        <Typography
          sx={{
            display: { xs: "none", md: "inline" }, // Show text only on small screens
            fontWeight: 550,
            fontSize: 14,
            color: "#000",
          }}
        >
          {menuList.options[selectedIndex]}
        </Typography>
      </Button>
      <Menu
        id="positioned-menu"
        aria-labelledby="positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuList.options.map((list, index) => (
          <MenuItem
            key={index}
            onClick={(event) => handleMenuItemClick(index)}
            selected={index === selectedIndex}
          >
            {list}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
