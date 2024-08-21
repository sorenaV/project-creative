import { Box } from "@mui/material";
import Filter from "../_components/Filter";
import List from "../_components/List";

export const metadata = {
  title: "Popular",
};

function Page() {
  return (
    <Box>
      <Filter />
      <List />
    </Box>
  );
}

export default Page;
