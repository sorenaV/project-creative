import { AppBar, Divider } from "@mui/material";
import Logo from "./Logo";

function Header(): JSX.Element {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        boxShadow: 0,
        width: "99%",
        overflowX: "hidden",
        paddingTop: 2,
        paddingLeft: 1,
      }}
    >
      <Logo />
      <Divider variant="middle" />
    </AppBar>
  );
}

export default Header;
