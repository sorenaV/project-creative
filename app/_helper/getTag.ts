import { tags } from "../_confing/data";

export function getTag() {
  const tag = tags;
  if (!tag) {
    throw new Error(`Tag not found`);
  }
  return tag;
}
