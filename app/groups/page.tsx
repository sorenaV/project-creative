import { Box, Typography } from "@mui/material";
import { Metadata } from "next";

import GroupFilter from "../_components/GroupFilter";
import SortAndSearchBar from "../_components/SortAndSearchBar";

export const metadata: Metadata = {
  title: "Groups",
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
        گروه ها
      </Typography>

      <SortAndSearchBar
        fieldNames={[
          { label: "نام گروه", value: "group-name" },
          { label: "تعداد عضو", value: "members" },
          { label: "تاریخ ساخت", value: "created-at" },
        ]}
      />

      <Box
        sx={{
          display: "grid",
          gap: 1,
          mt: 3,
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          },
        }}
      >
        {<GroupFilter sort={sort} searchTerm={searchTerm} />}
      </Box>
    </Box>
  );
}

export default Page;
