import { Box, Typography } from "@mui/material";
import { Metadata } from "next";

import GroupSummery from "../_components/GroupSummery";
import SearchSortHeader from "../_components/SearchSortHeader";
import { groupSummeryApi } from "../_config/data";

export const metadata: Metadata = {
  title: "Groups",
};

function Page() {
  const groupSummeryData = groupSummeryApi;
  return (
    <Box>
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: 25, mt: 5, fontWeight: 500 }}
      >
        گروه ها
      </Typography>
      <SearchSortHeader fieldNames={["نام گروه", "تعداد عضو", "تاریخ ساخت"]} />
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
        {groupSummeryData.map((group) => (
          <GroupSummery
            key={group.id}
            title={group.title}
            subtitle={group.subtitle}
            members={group.members}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Page;
