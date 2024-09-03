"use client";
import React, { useState } from "react";
import Link from "next/link";

import HideOnScroll from "./HideOnScroll";
import { navLinksLeft, navLinksRight } from "../_config/navItems";

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

function Appbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HideOnScroll>
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
              id="button"
              aria-controls={open ? "positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              component="button"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
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
              sx={{
                "& .MuiPaper-root": {
                  width: "auto",
                  maxWidth: "100%",
                  left: 0,
                  right: 0,
                  mx: 1,
                },
              }}
            >
              {navLinksLeft.map((link) => (
                <Link href={link.url} key={link.name}>
                  <ListItemButton
                    sx={{ minWidth: 0, justifyContent: "center" }}
                    dense={true}
                    disableGutters={true}
                    onClick={handleClose}
                  >
                    <ListItemIcon sx={{ justifyContent: "center" }}>
                      {link.icon}
                    </ListItemIcon>

                    <ListItemText primary={link.name} />
                  </ListItemButton>
                </Link>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          {navLinksRight.map((link) => (
            <Link key={link.name} href={link.url}>
              <IconButton>{link.icon}</IconButton>
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default Appbar;
