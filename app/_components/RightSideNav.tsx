import { navLinksRight } from "../_config/navItems";
import type { SidebarsType } from "../_types";
import SideNav from "./SideNav";

function RightSideNav({ isOpen, handleDrawer }: SidebarsType) {
  return (
    <SideNav
      anchorDir="right"
      navArray={navLinksRight}
      isOpen={isOpen}
      handleDrawer={handleDrawer}
    />
  );
}

export default RightSideNav;
