"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useDrawerContext } from "../_context/DrawerContext";
import {
  drawerExpandedWidth,
  drawerCollapsedWidth,
  NavElementType,
} from "../_confing/confing";

import {
  BrushRounded,
  KeyboardDoubleArrowLeftRounded,
  KeyboardDoubleArrowRightRounded,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";

type Props = {
  anchorDir: "left" | "right" | "bottom" | undefined;
  navArray: NavElementType[];
};

function NavDrawer({ anchorDir = "left", navArray }: Props) {
  const { isOpen, handleDrawer } = useDrawerContext();

  return (
    <Drawer
      anchor={anchorDir}
      open={isOpen}
      variant="permanent"
      sx={{
        width: isOpen ? drawerExpandedWidth : drawerCollapsedWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isOpen ? drawerExpandedWidth : drawerCollapsedWidth,
          transition: "width 0.5s",
          overflowX: "hidden",
          backgroundColor: "#f8f9fa",
          alignItems: "center",
        },
      }}
    >
      <Box
        component="nav"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <List sx={{ alignItems: "center" }}>
          {navArray?.map((link: NavElementType) => (
            <ListItem
              key={link.name}
              sx={{
                justifyContent: isOpen ? "initial" : "center",
              }}
            >
              <Link href={link.url}>
                <Tooltip title={link.name} arrow placement="right">
                  <ListItemButton
                    sx={{ minWidth: 0, justifyContent: "center" }}
                    dense={true}
                    disableGutters={true}
                  >
                    <ListItemIcon sx={{ justifyContent: "center" }}>
                      {link.icon}
                    </ListItemIcon>
                    {isOpen && (
                      <ListItemText
                        primary={link.name}
                        sx={{ opacity: isOpen ? 1 : 0 }}
                      />
                    )}
                  </ListItemButton>
                </Tooltip>
              </Link>
            </ListItem>
          ))}
        </List>
        {anchorDir === "left" ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: isOpen ? "flex-end" : "center",
              padding: "0.5rem",
            }}
          >
            <IconButton>
              {isOpen ? (
                <>
                  <BrushRounded />
                  <Typography>Skins</Typography>
                </>
              ) : (
                <BrushRounded />
              )}
            </IconButton>
            <IconButton onClick={handleDrawer}>
              {isOpen ? (
                <>
                  <KeyboardDoubleArrowLeftRounded />
                  <Typography>Collapse</Typography>
                </>
              ) : (
                <KeyboardDoubleArrowRightRounded />
              )}
            </IconButton>
          </Box>
        ) : null}
      </Box>
    </Drawer>
  );
}

export default NavDrawer;
