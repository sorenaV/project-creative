import { useScrollTrigger, Slide } from "@mui/material";
import React from "react";

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  );
}
export default HideOnScroll;
