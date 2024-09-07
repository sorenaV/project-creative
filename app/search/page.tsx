import { Box, Divider, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { Metadata } from "next";
import SearchPopover from "../_components/SearchPopover";
import SearchBar from "../_components/SearchBar";
import SearchFilter from "../_components/SearchFilter";
import SearchCategoryPopper from "../_components/SearchCategoryPopper";
import SortPopper from "../_components/SortPopper";
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

function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string; sortBy: string };
}) {
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
        <SearchBar />
      </Grid2>

      <Grid2 xs={12} md={7}>
        <Stack>
          <Stack direction="row" spacing={1} padding={1}>
            <SearchCategoryPopper />
            <SearchPopover label="کاربران" posts={users} paramLabel="users" />
            <SearchPopover label="تگ ها" posts={tags} paramLabel="tags" />
            <SortPopper />
          </Stack>
          <Divider variant="fullWidth" />

          <Box>
            <SearchFilter filter={filter} />
          </Box>
        </Stack>
      </Grid2>
    </Grid2>
  );
}

export default Page;
