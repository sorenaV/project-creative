import { tags } from "../_config/data";

export function getTag() {
  const tag = tags;
  if (!tag) {
    throw new Error(`Tag not found`);
  }
  return tag;
}
