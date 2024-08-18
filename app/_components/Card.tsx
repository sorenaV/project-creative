import { Paper, Stack } from "@mui/material";
import CardDetails from "./CardDetais";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import BiotechRoundedIcon from "@mui/icons-material/BiotechRounded";

function Card() {
  return (
    <Paper elevation={0}>
      <CardDetails
        bg="#fda34b"
        icon={<CampaignRoundedIcon sx={{ color: "#fff" }} />}
        title="Announcements"
        description="Announcements regarding our community"
        topics="10"
        posts="5"
      />
      <CardDetails
        bg="#59b3d0"
        icon={<ForumRoundedIcon sx={{ color: "#fff" }} />}
        title="General Discussion"
        description="A place to talk about whatever you want"
        topics="10"
        posts="5"
      />
      <CardDetails
        bg="#e95c5a"
        icon={<QuestionMarkRoundedIcon sx={{ color: "#fff" }} />}
        title="Comments & Feedback"
        description="Got a question? Ask away!"
        topics="10"
        posts="5"
      />
      <CardDetails
        bg="#86ba4b"
        icon={<ArticleRoundedIcon sx={{ color: "#fff" }} />}
        title="Blogs"
        description="Blog posts from individual members"
        topics="10"
        posts="5"
      />
      <CardDetails
        bg="#ab4642"
        icon={<BiotechRoundedIcon sx={{ color: "#fff" }} />}
        title="Blogs"
        description="Anyone can posts here to test NodeBB, even guests!"
        topics="10"
        posts="5"
      />
    </Paper>
  );
}

export default Card;
