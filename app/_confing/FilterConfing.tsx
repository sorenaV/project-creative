import { Dashboard } from "@mui/icons-material";

export type FilterType = {
  label: string;
  icon: any;
  menuList: string[];
};

export const filterPopularList: FilterType[] = [
  {
    label: "Date",
    icon: <Dashboard />,
    menuList: ["as", "as", "jdh"],
  },
  {
    label: "Date",
    icon: <Dashboard />,
    menuList: ["as", "as", "jdh"],
  },
];

const filterRecentList: FilterType = {
  label: "",
  icon: "",
  menuList: [],
};
