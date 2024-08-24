import {
  Dashboard,
  FilterAlt,
  FormatListBulletedRounded,
  SellRounded,
} from "@mui/icons-material";
import { categories } from "./categories";

export type FilterType = {
  id: number;
  name: string;
  icon: any;
  options: string[] | [];
};
const style = { color: "#0d6efd" };

export const filterPopularList: FilterType[] = [
  {
    id: 1,
    name: "All topics",
    icon: <FilterAlt sx={style} />,
    options: ["All Topics", "New Topics", "Watched Topics", "Unreplied Topics"],
  },
  {
    id: 2,
    name: "Date",
    icon: <FormatListBulletedRounded sx={style} />,
    options: ["as", "as", "jdh"],
  },

  {
    id: 3,
    name: "All Tags",
    icon: <SellRounded />,
    options: categories.map((category) => category.name),
  },
];

export const filterUnreadList: FilterType[] = [
  {
    id: 1,
    name: "All topics",
    icon: <FilterAlt sx={style} />,
    options: ["All Topics", "New Topics", "Watched Topics", "Unreplied Topics"],
  },
  {
    id: 2,
    name: "Date",
    icon: <FormatListBulletedRounded sx={style} />,
    options: ["as", "as", "jdh"],
  },

  {
    id: 3,
    name: "All Tags",
    icon: <SellRounded />,
    options: categories.map((category) => category.name),
  },
];

const filterRecentList: FilterType = {
  name: "",
  icon: "",
  options: [],
};
