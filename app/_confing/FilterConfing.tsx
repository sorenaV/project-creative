import {
  Dashboard,
  FilterAlt,
  FormatListBulletedRounded,
  SellRounded,
} from "@mui/icons-material";
import { categories } from "./categories";

export type FilterType = {
  id: number;
  label: string;
  icon: any;
  menuList: string[] | [];
};
const style = { color: "#0d6efd" };

export const filterPopularList: FilterType[] = [
  {
    id: 1,
    label: "All topics",
    icon: <FilterAlt sx={style} />,
    menuList: [
      "All Topics",
      "New Topics",
      "Watched Topics",
      "Unreplied Topics",
    ],
  },
  {
    id: 2,
    label: "Date",
    icon: <FormatListBulletedRounded sx={style} />,
    menuList: ["as", "as", "jdh"],
  },

  {
    id: 3,
    label: "All Tags",
    icon: <SellRounded />,
    menuList: categories.map((category) => category.name),
  },
];

const filterRecentList: FilterType = {
  label: "",
  icon: "",
  menuList: [],
};
