import Breadcrumb from "@/app/_components/breadcrumb";
import Chips from "@/app/_components/Chips";
import Filter from "@/app/_components/Filter";
import MobilePost from "@/app/_components/MobilePost";
import { getTopicDetails } from "@/app/_helper/getTopicDetails";
import { SdSharp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const filterOptions = [
  {
    name: "Oldest to new",
    icon: <SdSharp />,
    options: ["Oldest to Newest", "Newest to Oldest", "Most Votes"],
  },
];

function page({ params }: { params: { topicId: string } }) {
  const { title, status, category, author, createdAt, context } =
    getTopicDetails(params.topicId);

  return (
    <Box
      sx={{
        mt: {
          xs: 2,
          md: 4,
        },
      }}
    >
      <Breadcrumb category={category.name} />
      <Typography
        component="h5"
        variant="h5"
        sx={{
          mt: 2,
          fontSize: {
            xs: 22,
            md: 30,
          },
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>
      <Chips category={category.categoryId} status={status} />
      <Filter filterOptions={filterOptions} buttonLabel="Login" />
      <MobilePost
        author={author}
        createdAt={createdAt}
        context={context}
        votes={status.votes}
      />
    </Box>
  );
}

export default page;
