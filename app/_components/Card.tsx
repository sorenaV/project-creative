import { Box, List, Paper, Stack } from "@mui/material";
import CardDetails from "./CardDetais";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import BiotechRoundedIcon from "@mui/icons-material/BiotechRounded";
import { categories } from "../_confing/categories";

function Card() {
  return (
    <>
      {categories.map((category) => (
        <CardDetails
          key={category.name}
          bg={category.backgroundColor}
          icon={category.icon}
          title={category.name}
          description={category.description}
          topics={category.topics}
          posts={category.posts}
        />
      ))}
    </>
  );
}

export default Card;

{
  /* <Grid container>
<Grid
  xs={12}
  md={6}
  sx={{
    height: "6rem",
    display: "flex",
    alignItems: "center",
  }}
> */
}
