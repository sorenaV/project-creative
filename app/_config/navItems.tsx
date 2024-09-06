import {
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
import type { NavElementType } from "../_types";

export const navLinksLeft: NavElementType[] = [
  {
    name: "دسته بندی ها",
    icon: <FormatListBulletedRounded />,
    url: "/categories",
  },
  {
    name: "نخوانده",
    icon: <InboxRounded />,
    url: "/unread",
  },
  {
    name: "تگ ها",
    icon: <LocalOfferRounded />,
    url: "/tags",
  },
  {
    name: "محبوب ها",
    icon: <LocalFireDepartmentRounded />,
    url: "/popular",
  },
  {
    name: "کاربران",
    icon: <PersonRounded />,
    url: "/users",
  },
  {
    name: "گروه ها",
    icon: <Groups2Rounded />,
    url: "/groups",
  },
  {
    name: "ادمین",
    icon: <SettingsRounded />,
    url: "/admin",
  },
  {
    name: "جستجو",
    icon: <SearchRounded />,
    url: "/search",
  },
];

export const navLinksRight = [
  {
    name: "ورود",
    icon: <LoginRounded />,
    url: "/login",
  },
  {
    name: "ثبت نام",
    icon: <PersonAddAlt1Rounded />,
    url: "/register",
  },
];
