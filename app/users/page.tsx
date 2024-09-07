import type { Metadata } from "next";

import SortAndSearchBar from "../_components/SortAndSearchBar";
import UserFilter from "../_components/UserFilter";

import { Box, List, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Users",
};

function Page({ searchParams }: { searchParams: { [key: string]: string } }) {
  const sort = searchParams?.sortBy ?? "all";
  const searchTerm = searchParams?.term ?? "";

  return (
    <Box>
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: 25, mt: 5, fontWeight: 500 }}
      >
        کاربران
      </Typography>
      <div>
        <SortAndSearchBar
          fieldNames={[
            { label: "آنلاین", value: "online" },
            { label: "بیشترین پست", value: "posts" },
            { label: "بیشترین شهرت", value: "reputation" },
          ]}
        />
      </div>
      <List
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(5, 1fr)",
          },
        }}
      >
        {<UserFilter sort={sort} searchTerm={searchTerm} />}
      </List>
    </Box>
  );
}

export default Page;
