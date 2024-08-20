import {
  AccessTimeOutlined,
  BrushRounded,
  FormatListBulletedRounded,
  Groups2Rounded,
  InboxRounded,
  LocalFireDepartmentRounded,
  LocalOfferRounded,
  LoginRounded,
  PersonAddAlt1Rounded,
  PersonRounded,
  SearchRounded,
  SettingsRounded,
} from "@mui/icons-material";

export const drawerCollapsedWidth = 60;
export const drawerExpandedWidth = 240;

export type NavElementType = {
  name: string;
  icon: JSX.Element;
  url: string;
};

export const navLinksLeft: NavElementType[] = [
  {
    name: "Categories",
    icon: <FormatListBulletedRounded />,
    url: "/categories",
  },
  {
    name: "Unread",
    icon: <InboxRounded />,
    url: "/unread",
  },
  {
    name: "Recent",
    icon: <AccessTimeOutlined />,
    url: "/recent",
  },
  {
    name: "Tags",
    icon: <LocalOfferRounded />,
    url: "/tags",
  },
  {
    name: "Popular",
    icon: <LocalFireDepartmentRounded />,
    url: "/popular",
  },
  {
    name: "Users",
    icon: <PersonRounded />,
    url: "/popular",
  },
  {
    name: "Groups",
    icon: <Groups2Rounded />,
    url: "/groups",
  },
  {
    name: "Admin",
    icon: <SettingsRounded />,
    url: "/admin",
  },
  {
    name: "Search",
    icon: <SearchRounded />,
    url: "/search",
  },
];

export const navLinksRight = [
  {
    name: "Login",
    icon: <LoginRounded />,
    url: "/",
  },
  {
    name: "Register",
    icon: <PersonAddAlt1Rounded />,
    url: "/",
  },
];
