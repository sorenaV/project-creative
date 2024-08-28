import { navLinksRight } from "../_config/navItems";
import type { SidebarsType } from "../_types";
import NavDrawer from "./NavDrawer";

function RightSideNav({ isOpen, handleDrawer }: SidebarsType) {
  return (
    <NavDrawer
      anchorDir="right"
      navArray={navLinksRight}
      isOpen={isOpen}
      handleDrawer={handleDrawer}
    />
  );
}

export default RightSideNav;
