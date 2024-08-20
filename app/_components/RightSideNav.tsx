import { navLinksRight } from "../_confing/confing";
import NavDrawer from "./NavDrawer";
// REMINDER : MAKE A NEW FILE FOR ALL TTYPES, THIS FILE HAVE BEEN USED IN Left
type RightSideNav = {
  isOpen: boolean;
  handleDrawer: () => void;
};

function RightSideNav({ isOpen, handleDrawer }: RightSideNav) {
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
