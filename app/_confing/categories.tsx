import {
  ArticleRounded,
  BiotechRounded,
  CampaignRounded,
  ForumRounded,
  QuestionMarkRounded,
} from "@mui/icons-material";

export const categories = [
  {
    name: "Announcements",
    icon: <CampaignRounded sx={{ color: "#fff" }} />,
    description: "Announcements regarding our community",
    backgroundColor: "#fda34b",
    topics: "10",
    posts: "5",
  },
  {
    name: "General Discussion",
    icon: <ForumRounded sx={{ color: "#fff" }} />,
    description: "A place to talk about whatever you want",
    backgroundColor: "#59b3d0",
    topics: "10",
    posts: "5",
  },
  {
    name: "Comments & Feedback",
    icon: <QuestionMarkRounded sx={{ color: "#fff" }} />,
    description: "Got a question? Ask away!",
    backgroundColor: "#e95c5a",
    topics: "10",
    posts: "5",
  },
  {
    name: "Blogs",
    icon: <ArticleRounded sx={{ color: "#fff" }} />,
    description: "Blog posts from individual members",
    backgroundColor: "#86ba4b",
    topics: "10",
    posts: "5",
  },
  {
    name: "Testing Ground",
    icon: <BiotechRounded sx={{ color: "#fff" }} />,
    description: "Anyone can posts here to test NodeBB, even guests!",
    backgroundColor: "#ab4642",
    topics: "10",
    posts: "5",
  },
];
