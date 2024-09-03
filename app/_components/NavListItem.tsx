import Link from "next/link";
import type { NavElementType } from "../_types";

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";

type NavListItemType = {
  link: NavElementType;
  isOpen: Boolean;
};

function NavListItem({ isOpen, link }: NavListItemType) {
  return (
    <ListItem
      sx={{
        justifyContent: isOpen ? "initial" : "center",
      }}
    >
      <Link href={link.url}>
        <Tooltip title={link.name} arrow followCursor placement="right">
          <ListItemButton
            sx={{ minWidth: 0, justifyContent: "center" }}
            dense={true}
            disableGutters={true}
          >
            <ListItemIcon sx={{ justifyContent: "center" }}>
              {link.icon}
            </ListItemIcon>
            {isOpen && (
              <ListItemText
                primary={link.name}
                primaryTypographyProps={{ fontWeight: 500 }}
                sx={{ textWrap: "nowrap", opacity: 0.8 }}
              />
            )}
          </ListItemButton>
        </Tooltip>
      </Link>
    </ListItem>
  );
}

export default NavListItem;
