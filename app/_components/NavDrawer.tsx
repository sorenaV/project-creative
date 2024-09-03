"use client";
import type { NavElementType } from "../_types/index";
import NavListItem from "./NavListItem";

import { Box, Drawer, IconButton, List, Typography } from "@mui/material";
import {
  BrushRounded,
  KeyboardDoubleArrowLeftRounded,
  KeyboardDoubleArrowRightRounded,
} from "@mui/icons-material";
import { drawerCollapsedWidth, drawerExpandedWidth } from "../_utils/constants";

type NavDrawerPropsType = {
  anchorDir: "left" | "right" | "bottom" | undefined;
  navArray: NavElementType[];
  isOpen: boolean;
  handleDrawer: () => void;
};

function NavDrawer({
  anchorDir = "left",
  navArray,
  isOpen,
  handleDrawer,
}: NavDrawerPropsType) {
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
          display: {
            xs: "none",
            md: "flex",
          },
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
            <NavListItem key={link.name} isOpen={isOpen} link={link} />
          ))}
        </List>

        {/* 2 More Icons Only On the Left Side */}
        {anchorDir === "left" && (
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
                  <Typography sx={{ fontWeight: 500 }}>پوسته ها</Typography>
                </>
              ) : (
                <BrushRounded />
              )}
            </IconButton>
            <IconButton onClick={handleDrawer}>
              {isOpen ? (
                <>
                  <KeyboardDoubleArrowRightRounded />
                  <Typography sx={{ fontWeight: 500 }}>بستن منو</Typography>
                </>
              ) : (
                <KeyboardDoubleArrowLeftRounded />
              )}
            </IconButton>
          </Box>
        )}
      </Box>
    </Drawer>
  );
}

export default NavDrawer;
