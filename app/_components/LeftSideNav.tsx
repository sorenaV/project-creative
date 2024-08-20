import { navLinksLeft } from "../_confing/confing";
import NavDrawer from "./NavDrawer";

// REMINDER : MAKE A NEW FILE FOR ALL TTYPES, THIS FILE HAVE BEEN USED IN RIGHT
type LeftSideNav = {
  isOpen: boolean;
  handleDrawer: () => void;
};

function LeftSideNav({ isOpen, handleDrawer }: LeftSideNav) {
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
