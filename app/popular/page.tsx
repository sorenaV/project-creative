import TopicsList from "../_components/TopicsList";
import Filter from "../_components/Filter";
import { topicsData } from "../_config/data";
import { filterPopularList } from "../_config/FilterConfig";

import { Box } from "@mui/material";

export const metadata = {
  title: "Popular",
};

function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { category, topics, date } = searchParams;

  return (
    <Box>
      <Filter
        filterOptions={filterPopularList}
        buttonLabel="ورود"
        buttonPath="/login"
      />

      <TopicsList
        pageName="category"
        filterCategory={category}
        data={topicsData}
      />
    </Box>
  );
}

export default Page;
