"use client";
import { Box } from "@mui/material";
import LeftSideNav from "./LeftSideNav";
import RightSideNav from "./RightSideNav";
import Appbar from "./Appbar";
import { useState } from "react";

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
