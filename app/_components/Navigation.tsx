"use client";
import { useState } from "react";

import LeftSideNav from "./LeftSideNav";
import RightSideNav from "./RightSideNav";
import Appbar from "./Appbar";

import { Box } from "@mui/material";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box>
      <LeftSideNav isOpen={isOpen} handleDrawer={handleDrawer} />
      <RightSideNav isOpen={isOpen} handleDrawer={handleDrawer} />
      <Appbar />
    </Box>
  );
}

export default Navigation;
