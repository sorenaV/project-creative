import { topicDetails } from "../_config/data";
import { TopicDetailsType } from "../_types";

export function getTopicDetails(topicId: string): TopicDetailsType {
  const topic = topicDetails.find((topic) => topic.id === Number(topicId));

  if (!topic) {
    throw new Error(`Topic not found`);
  }
  return topic;
}
