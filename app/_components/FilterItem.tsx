"use client";
import {
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
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
    <Box sx={{ width: 130 }}>
      <Button
        id="positioned-button"
        aria-controls={open ? "positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={itemList.icon}
      >
        <Typography
          sx={{
            display: { xs: "none", md: "inline" }, // Show text only on small screens
            fontWeight: 550,
            fontSize: 14,
            color: "#000",
          }}
        >
          {itemList.label}
        </Typography>
      </Button>
      <Menu
        id="positioned-menu"
        aria-labelledby="positioned-button"
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
    </Box>
  );
}

export default FilterItem;
