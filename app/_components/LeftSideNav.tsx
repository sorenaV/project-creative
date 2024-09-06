import { navLinksLeft } from "../_config/navItems";
import type { SidebarsType } from "../_types";
import SideNav from "./SideNav";

function LeftSideNav({ isOpen, handleDrawer }: SidebarsType) {
  return (
    <SideNav
      anchorDir="left"
      navArray={navLinksLeft}
      isOpen={isOpen}
      handleDrawer={handleDrawer}
    />
  );
}

export default LeftSideNav;
