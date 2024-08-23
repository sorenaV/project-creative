import { Box } from "@mui/material";
import Filter from "../_components/Filter";
import TopicList from "../_components/TopicList";
import { filterPopularList } from "../_confing/FilterConfing";
import { data } from "../_confing/data";

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
