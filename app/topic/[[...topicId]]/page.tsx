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

type ParamsType = { params: { topicId: string } };

export function generateMetadata({ params }: ParamsType) {
  const { title } = getTopicDetails(params.topicId);
  return { title: `Topic : ${title}` };
}

function Page({ params }: ParamsType) {
  const { title, status, category, author, createdAt, context, isRead } =
    getTopicDetails(params.topicId);

  return (
    <Box
      sx={{
        my: {
          xs: 2,
          md: 4,
        },
      }}
    >
      <Breadcrumb category={category.name} id={category.categoryId} />
      <Typography
        component="h5"
        variant="h5"
        sx={{
          my: 2,
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

export default Page;
