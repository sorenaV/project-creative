import {
  FilterAlt,
  FormatListBulletedRounded,
  SellRounded,
} from "@mui/icons-material";
import { categories } from "./categories";
import type { FilterOptionsType } from "../_types";

const style = { color: "#0d6efd" };

export const filterPopularList: FilterOptionsType[] = [
  {
    name: "topics",
    icon: <FilterAlt sx={style} />,
    options: [
      { label: "همه‌ی تاپیک ها", value: "all" },
      { label: "تاپیک های جدید", value: "new" },
      { label: "تاپیک های دیده شده", value: "seen" },
      { label: "تاپیک های بدون پاسخ", value: "no-reply" },
    ],
  },
  {
    name: "date",
    icon: <FormatListBulletedRounded sx={style} />,
    options: [
      { label: "همه", value: "all" },
      { label: "روز", value: "day" },
      { label: "هفته", value: "week" },
      { label: "ماه", value: "month" },
    ],
  },

  {
    name: "category",
    icon: <SellRounded />,
    options: categories.map((category) => {
      return { label: category.name, value: category.url };
    }),
  },
];

export const filterUnreadList: FilterOptionsType[] = [
  {
    name: "All topics",
    icon: <FilterAlt sx={style} />,
    options: [
      { label: "همه‌ی تاپیک ها", value: "all" },
      { label: "تاپیک های جدید", value: "new" },
      { label: "تاپیک های دیده شده", value: "seen" },
      { label: "تاپیک های بدون پاسخ", value: "no-reply" },
    ],
  },
  {
    name: "Date",
    icon: <FormatListBulletedRounded sx={style} />,
    options: [
      { label: "همه", value: "all" },
      { label: "روز", value: "day" },
      { label: "هفته", value: "week" },
      { label: "ماه", value: "month" },
    ],
  },

  {
    name: "All Tags",
    icon: <SellRounded />,
    options: [{ label: "همه‌ تگ‌ها", value: "" }],
  },
];
