import Breadcrumb from "@/app/_components/breadcrumb";
import { topicDetails } from "@/app/_confing/data";
import { Box, Breadcrumbs, Typography } from "@mui/material";

function page({ params }) {
  const title = topicDetails.find(
    (topic) => topic.id === +params.topicId
  )?.title;

  console.log(params);

  return (
    <Box sx={{ mt: 2 }}>
      <Breadcrumb />
      <Typography component="h5" variant="h5" sx={{ mt: 3, fontWeight: 500 }}>
        {title}
      </Typography>
    </Box>
  );
}

export default page;
