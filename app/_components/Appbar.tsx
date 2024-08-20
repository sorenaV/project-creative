"use client";
import {
  AppBar,
  Box,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Toolbar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { navLinksLeft, navLinksRight } from "../_confing/confing";
import { useState } from "react";

function Appbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: EventTarget) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      aria-label="open drawer"
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100vw",
        backgroundColor: "#f8f9fa",
        color: "#6c757d",
        boxShadow: "none",
        display: {
          md: "none",
        },
      }}
    >
      <Toolbar>
        <Box>
          <IconButton
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {navLinksLeft.map((link) => (
              <ListItemButton
                sx={{ minWidth: 0, justifyContent: "center" }}
                dense={true}
                disableGutters={true}
                href={link.url}
              >
                <ListItemIcon sx={{ justifyContent: "center" }}>
                  {link.icon}
                </ListItemIcon>

                <ListItemText primary={link.name} />
              </ListItemButton>
            ))}
          </Menu>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        {navLinksRight.map((link) => (
          <IconButton key={link.name} href={link.url}>
            {link.icon}
          </IconButton>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
