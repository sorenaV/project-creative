import { navLinksRight } from "../_confing/confing";
import NavDrawer from "./NavDrawer";

function RightSideNav() {
  return <NavDrawer anchorDir="right" navArray={navLinksRight} />;
}

export default RightSideNav;
