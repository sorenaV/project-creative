import Breadcrumb from "@/app/_components/breadcrumb";
import CategoryChip from "@/app/_components/CategoryChip";
import ChipBox from "@/app/_components/ChipBox";
import Filter from "@/app/_components/Filter";
import TopicContent from "@/app/_components/TopicContent";
import { getTopicDetails } from "@/app/_utils/helpers";

import { SdSharp } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

const filterOptions = [
  {
    name: "topic-filter",
    icon: <SdSharp />,
    options: [
      { label: "قدیمی به جدید", value: "old-to-new" },
      { label: "جدید به قدیمی", value: "new-to-old" },
      { label: "بیشترین رای", value: "most-votes" },
    ],
  },
];

type ParamsType = { params: { topicId: string } };

export function generateMetadata({ params }: ParamsType) {
  const { title } = getTopicDetails(params?.topicId);
  return { title: `Topic : ${title}` };
}

function Page({ params }: ParamsType) {
  const topicId = params?.topicId;
  const { id, title, status, category, author, createdAt, context, isRead } =
    getTopicDetails(topicId);

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

      <Stack
        sx={{
          mt: 2,
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          gap: 1,
        }}
      >
        <CategoryChip categoryId={category.categoryId} />
        <Stack direction="row" spacing={1}>
          <ChipBox label="پست" labelNumber={status.posts} />
          <ChipBox label="بازدید" labelNumber={status.views} />
          <ChipBox label="پست" labelNumber={status.posts} />
        </Stack>
      </Stack>

      <Filter
        filterOptions={filterOptions}
        buttonLabel="ورود"
        buttonPath="/login"
      />

      <TopicContent
        author={author}
        createdAt={createdAt}
        context={context}
        votes={status.votes}
      />
    </Box>
  );
}

export default Page;
