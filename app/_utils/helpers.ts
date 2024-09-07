import { categories } from "../_config/categories";
import type { Category } from "../_types";
import { tags } from "../_config/data";
import { notFound } from "next/navigation";
import { topicDetails } from "../_config/data";
import type { TopicDetailsType } from "../_types";

export function getCategoryItem(id: number): Category {
  const categoryItem = categories.find((category) => category.id === id);
  if (!categoryItem) {
    throw new Error(`Category with id "${id}" not found`);
  }
  return categoryItem;
}

export function getTag() {
  const tag = tags;
  if (!tag) {
    throw new Error(`Tag not found`);
  }
  return tag;
}

export function getTopicDetails(topicId: string): TopicDetailsType {
  const topic = topicDetails.find((topic) => topic.id === Number(topicId));

  if (!topic) {
    notFound();
  }
  return topic;
}
