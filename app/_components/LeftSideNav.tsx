import { navLinksLeft, NavElement } from "../_confing/confing";
import NavDrawer from "./NavDrawer";

function LeftSideNav() {
  return <NavDrawer anchorDir="left" navArray={navLinksLeft} />;
}

export default LeftSideNav;
