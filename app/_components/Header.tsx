import { AppBar, Divider } from "@mui/material";
import Logo from "./Logo";

function Header(): JSX.Element {
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
