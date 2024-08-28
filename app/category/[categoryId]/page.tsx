import Breadcrumb from "@/app/_components/breadcrumb";
import ChipBox from "@/app/_components/ChipBox";
import Filter from "@/app/_components/Filter";
import TopicList from "@/app/_components/TopicList";
import { data } from "@/app/_config/data";
import { getCategoryItem } from "@/app/_helper/getCategoryItem";

import { SdSharp } from "@mui/icons-material";
import { Alert, Box, IconButton, Stack, Typography } from "@mui/material";

const filterOptions = [
  {
    name: "Recently Replied",
    icon: <SdSharp />,
    options: [
      "Recently Replied",
      "Recently Created",
      "Most Posts",
      "Most Votes",
      "Most Views",
    ],
  },
];

type ParamsType = { params: { categoryId: string } };

export function generateMetadata({ params }: ParamsType) {
  const { name } = getCategoryItem(Number(params.categoryId));
  return { title: `Category : ${name}` };
}

function Page({ params }: ParamsType) {
  const { name, icon, backgroundColor, description, topics, posts, id } =
    getCategoryItem(Number(params.categoryId));

  const list = data.filter((item) => item.category.categoryId === id);

  return (
    <Box
      sx={{
        mt: {
          xs: 2,
          md: 4,
        },
      }}
    >
      <Breadcrumb category={name} id={id} />
      <Box
        sx={{
          mt: {
            xs: 3,
            md: 5,
          },
        }}
      >
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <IconButton
            sx={{
              backgroundColor,
              borderRadius: 1,
              "&:hover": { backgroundColor },
            }}
          >
            {icon}
          </IconButton>
          <Typography
            variant="h5"
            component="h5"
            sx={{ fontSize: { xs: 24, md: 28 }, fontWeight: 500 }}
          >
            {name}
          </Typography>
        </Stack>

        <Typography
          variant="h5"
          component="h5"
          sx={{ mt: 2, fontSize: 14, opacity: 0.5 }}
        >
          {description}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
          <ChipBox labelNumber={posts} label="posts" />
          <ChipBox labelNumber={topics} label="topics" />
        </Stack>
      </Box>
      <Filter buttonLabel="Login" filterOptions={filterOptions} />

      {list.length ? (
        <TopicList pageName="detail" data={list} />
      ) : (
        <Alert sx={{ bgColor: { backgroundColor } }}>
          No Post in this topic yet.
        </Alert>
      )}
    </Box>
  );
}

export default Page;
