import { navLinksLeft } from "../_config/navItems";
import type { SidebarsType } from "../_types";
import NavDrawer from "./NavDrawer";

function LeftSideNav({ isOpen, handleDrawer }: SidebarsType) {
  return (
    <NavDrawer
      anchorDir="left"
      navArray={navLinksLeft}
      isOpen={isOpen}
      handleDrawer={handleDrawer}
    />
  );
}

export default LeftSideNav;
