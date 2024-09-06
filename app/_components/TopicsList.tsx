import { DataType } from "../_types";
import TopicItem from "./TopicItem";

import { List } from "@mui/material";

type TopicListType = {
  data: DataType[];
  pageName: string;
  filterCategory?: string;
};

function TopicsList({
  data,
  pageName = "topic",
  filterCategory,
}: TopicListType) {
  const topics = data;
  if (!topics) return null;
  let displayTopics = topics;

  if (filterCategory) {
    displayTopics = topics.filter(
      (topic) => topic.category.url === filterCategory
    );
  }

  return (
    <List>
      {displayTopics.map((item) => (
        <TopicItem key={item.id} item={item} pageName={pageName} />
      ))}
    </List>
  );
}

export default TopicsList;
