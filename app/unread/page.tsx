import { Metadata } from "next";

import Filter from "../_components/Filter";
import { filterUnreadList } from "../_config/FilterConfig";
import { topicsData } from "../_config/data";
import TopicsList from "../_components/TopicsList";

import { Alert, Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Unread",
};

function Page() {
  const unreadData = topicsData.filter((data) => data.isRead === false);
  return (
    <Box sx={{ mt: 4 }}>
      <Filter
        filterOptions={filterUnreadList}
        buttonLabel="ورود"
        buttonPath="/login"
      />

      {unreadData.length ? (
        <TopicsList pageName="category" data={unreadData} />
      ) : (
        <Alert severity="info">Good,You have read all the topics.</Alert>
      )}
    </Box>
  );
}

export default Page;
