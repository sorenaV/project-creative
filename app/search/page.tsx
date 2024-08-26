import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { Metadata } from "next";
import SearchSelect from "../_components/SearchSelect";
import CustomPopover from "../_components/CustomPopover";
import { tags, users } from "../_confing/data";
import SortBy from "../_components/SortBy";
import TopicList from "../_components/TopicList";
import SearchList from "../_components/SearchList";
import SearchInput from "../_components/SearchInput";

export const metadata: Metadata = {
  title: "Search",
};

function Page({ searchParams }) {
  const filter = searchParams;

  return (
    <Grid2 container spacing={5}>
      <Grid2 xs={12} md={3}>
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontSize: 25, mt: 3, fontWeight: 500 }}
        >
          Search
        </Typography>
        <SearchInput />
      </Grid2>

      <Grid2 xs={12} md={7}>
        <Stack>
          <Stack direction="row" spacing={1} padding={1}>
            <SearchSelect />
            <CustomPopover label="users" posts={users} />
            <CustomPopover label="tag" posts={tags} />
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
