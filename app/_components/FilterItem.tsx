"use client";
import { useState } from "react";

import type { FilterOptionsType } from "../_types";

import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { useSearchParamsHandler } from "../_utils/useSearchParams";

type FilterItem = {
  menuList: FilterOptionsType;
};

export default function FilterItem({ menuList }: FilterItem) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const { updateSearchParam } = useSearchParamsHandler();

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (index: number, filterValue: string) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    updateSearchParam(menuList.name, filterValue);
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
            display: { xs: "none", md: "inline" }, // Shows text only on small screens
            fontWeight: 500,
            fontSize: 14,
            color: "#000",
          }}
        >
          {menuList.options[selectedIndex].label}
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
            onClick={() => handleMenuItemClick(index, list.value)}
            selected={index === selectedIndex}
          >
            {list.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
