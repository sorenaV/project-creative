import TopicList from "../_components/TopicList";
import Filter from "../_components/Filter";
import { data } from "../_config/data";
import { filterPopularList } from "../_config/FilterConfig";

import { Box } from "@mui/material";

export const metadata = {
  title: "Popular",
};

function Page() {
  return (
    <Box>
      <Filter filterOptions={filterPopularList} buttonLabel="Login" />
      <TopicList pageName="category" data={data} />
    </Box>
  );
}

export default Page;
