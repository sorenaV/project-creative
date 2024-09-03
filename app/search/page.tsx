import { Box, Divider, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { Metadata } from "next";
import CustomPopover from "../_components/CustomPopover";
import SearchInput from "../_components/SearchInput";
import SearchList from "../_components/SearchList";
import SearchCategory from "../_components/SearchCategory";
import SortBy from "../_components/SortBy";
import { tags, users } from "../_config/data";

export const metadata: Metadata = {
  title: "Search",
};

type FilterType = {
  categories: string;
  users: string;
  tag: string;
  sortBy: string;
  order: string;
};

function Page({ searchParams }: { searchParams: FilterType }) {
  const filter = searchParams;

  return (
    <Grid2
      container
      spacing={{
        xs: 2,
        md: 5,
      }}
    >
      <Grid2 xs={12} md={5}>
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontSize: 25, mt: 3, fontWeight: 500 }}
        >
          جستجو
        </Typography>
        <SearchInput />
      </Grid2>

      <Grid2 xs={12} md={7}>
        <Stack>
          <Stack direction="row" spacing={1} padding={1}>
            <SearchCategory />
            <CustomPopover label="کاربران" posts={users} paramLabel="users" />
            <CustomPopover label="تگ ها" posts={tags} paramLabel="tags" />
            <SortBy />
          </Stack>
          <Divider />
          <Box>
            <SearchList filter={filter} />
          </Box>
        </Stack>
      </Grid2>
    </Grid2>
  );
}

export default Page;
