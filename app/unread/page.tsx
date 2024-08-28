import { Alert, Box } from "@mui/material";
import { Metadata } from "next";
import Filter from "../_components/Filter";
import { filterUnreadList } from "../_config/FilterConfig";
import { data } from "../_config/data";
import TopicList from "../_components/TopicList";

export const metadata: Metadata = {
  title: "Unread",
};

function Page() {
  const unreadData = data.filter((data) => data.isRead === false);
  return (
    <Box sx={{ mt: 4 }}>
      <Filter filterOptions={filterUnreadList} buttonLabel="Log in" />
      {unreadData.length ? (
        <TopicList pageName="category" data={unreadData} />
      ) : (
        <Alert severity="info">Good,You have read all the topics.</Alert>
      )}
    </Box>
  );
}

export default Page;
