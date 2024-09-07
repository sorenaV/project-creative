"use client";
import Link from "next/link";
import { useState } from "react";

import { navLinksLeft, navLinksRight } from "../_config/navItems";
import HideOnScroll from "./HideOnScroll";

import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

function MobileBottomBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
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
            <IconButton component="button" onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="bottom" open={isOpen} onClose={handleClick}>
              {navLinksLeft.map((link) => (
                <Link href={link.url} key={link.name}>
                  <ListItemButton
                    sx={{ minWidth: 0, justifyContent: "center" }}
                    dense={true}
                    disableGutters={true}
                    onClick={handleClick}
                  >
                    <ListItemIcon sx={{ justifyContent: "center" }}>
                      {link.icon}
                    </ListItemIcon>

                    <ListItemText primary={link.name} />
                  </ListItemButton>
                </Link>
              ))}
            </Drawer>
          </Box>
          <Box sx={{ ml: "auto" }}>
            {navLinksRight.map((link) => (
              <Link key={link.name} href={link.url}>
                <IconButton>{link.icon}</IconButton>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default MobileBottomBar;
