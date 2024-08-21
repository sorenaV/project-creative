import { topicDetails } from "@/app/_confing/data";
import { Box } from "@mui/material";

function page({ params }) {
  const title = topicDetails.find(
    (topic) => topic.id === params.topicId
  )?.title;

  console.log(params);

  return <Box>{title}</Box>;
}

export default page;
