"use client";
import { useState } from "react";

import LeftSideNav from "./LeftSideNav";
import RightSideNav from "./RightSideNav";
import MobileBottomBar from "./MobileBottomBar";

import { Box } from "@mui/material";

function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box>
      <LeftSideNav isOpen={isOpen} handleDrawer={handleDrawer} />
      <RightSideNav isOpen={isOpen} handleDrawer={handleDrawer} />
      <MobileBottomBar />
    </Box>
  );
}

export default Navigation;
