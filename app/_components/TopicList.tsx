import type { DataType } from "../_types";
import TopicListItem from "./TopicListItem";

import { List } from "@mui/material";

type TopicListType = {
  data: DataType[];
  pageName: string;
};

function TopicList({ data, pageName = "topic" }: TopicListType) {
  return (
    <List sx={{ mt: 4 }}>
      {data.map((item) => (
        <TopicListItem key={item.id} item={item} pageName={pageName} />
      ))}
    </List>
  );
}

export default TopicList;
