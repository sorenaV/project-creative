import { navLinksLeft } from "../_confing/confing";
import type { SidebarsType } from "../_types";
import NavDrawer from "./NavDrawer";

// REMINDER : MAKE A NEW FILE FOR ALL TTYPES, THIS FILE HAVE BEEN USED IN RIGHT

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
