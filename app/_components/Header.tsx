import Logo from "./Logo";

import { AppBar, Divider } from "@mui/material";

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        boxShadow: 0,
        mt: 2,
      }}
    >
      <Logo />
      <Divider />
    </AppBar>
  );
}

export default Header;
