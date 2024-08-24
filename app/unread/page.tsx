import { Box } from "@mui/material";
import { Metadata } from "next";
import Filter from "../_components/Filter";
import { filterUnreadList } from "../_confing/FilterConfing";
import { data } from "../_confing/data";
import TopicList from "../_components/TopicList";
import Alert from "../_components/Alert";

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
        <Alert bgColor="#cff4fc" message="Good,You have read all the topics." />
      )}
    </Box>
  );
}

export default Page;
