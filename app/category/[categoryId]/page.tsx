import Breadcrumb from "@/app/_components/Breadcrumb";
import ChipBox from "@/app/_components/ChipBox";
import Filter from "@/app/_components/Filter";
import TopicsList from "@/app/_components/TopicsList";
import { topicsData } from "@/app/_config/data";
import { getCategoryItem } from "@/app/_utils/helpers";

import { SdSharp } from "@mui/icons-material";
import { Alert, Box, IconButton, Stack, Typography } from "@mui/material";

const filterOptions = [
  {
    name: "category-filter",
    icon: <SdSharp />,
    options: [
      { label: "اخرین جواب", value: "recently-replied" },
      { label: "اخرین ساخته شده", value: "recently-created" },
      { label: "بیشترین پست", value: "most-posts" },
      { label: "بیشترین رای", value: "most-votes" },
      { label: "بیشترین بازدید", value: "most-views" },
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

  const list = topicsData.filter((item) => item.category.categoryId === id);

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
          my: {
            xs: 2,
            md: 3,
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
          component="h6"
          sx={{ my: 1, fontSize: 14, opacity: 0.5 }}
        >
          {description}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ my: 2 }}>
          <ChipBox labelNumber={posts} label="پست" />
          <ChipBox labelNumber={topics} label="تاپیک" />
        </Stack>
      </Box>
      <Filter buttonLabel="ورود" filterOptions={filterOptions} />

      {list.length ? (
        <TopicsList pageName="detail" data={list} />
      ) : (
        <Alert severity="info" sx={{ my: 3 }}>
          هنوز پستی منتشر نشده.
        </Alert>
      )}
    </Box>
  );
}

export default Page;
