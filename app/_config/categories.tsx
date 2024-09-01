import { Category } from "../_types";

import {
  ArticleRounded,
  BiotechRounded,
  CampaignRounded,
  ForumRounded,
  QuestionMarkRounded,
} from "@mui/icons-material";

export const categories: Category[] = [
  {
    id: 1,
    name: "اطلاعیه ها",
    url: "announcements",
    icon: <CampaignRounded sx={{ color: "#fff" }} />,
    description: "اطلاعیه های مربوط به کامیونیتی",
    backgroundColor: "#fda34b",
    topics: "10",
    posts: "5",
  },
  {
    id: 2,
    name: "بحث های عمومی",
    url: "general-discussion",
    icon: <ForumRounded sx={{ color: "#fff" }} />,
    description: "محلی برای صحبت درباره همه‌چیز ",
    backgroundColor: "#59b3d0",
    topics: "10",
    posts: "5",
  },
  {
    id: 3,
    name: "نظرات",
    url: "Comments-Feedback",
    icon: <QuestionMarkRounded sx={{ color: "#fff" }} />,
    description: "اگه سوالی داری تعارف نکن!",
    backgroundColor: "#e95c5a",
    topics: "10",
    posts: "5",
  },
  {
    id: 4,
    name: "بلاگ ها",
    url: "blogs",
    icon: <ArticleRounded sx={{ color: "#fff" }} />,
    description: "پست های افراد",
    backgroundColor: "#86ba4b",
    topics: "10",
    posts: "5",
  },
  {
    id: 5,
    name: "زمین تست",
    url: "testing-ground",
    icon: <BiotechRounded sx={{ color: "#fff" }} />,
    description: "هرکسی میتونه اینچا پست بزاره حتی مهمون ها",
    backgroundColor: "#ab4642",
    topics: "10",
    posts: "5",
  },
];
