import { Slide, useScrollTrigger } from "@mui/material";

function HideOnScroll({ children }: { children: JSX.Element }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  );
}
export default HideOnScroll;
