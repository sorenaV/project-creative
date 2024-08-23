import { categories } from "../_confing/categories";
import { Category } from "@/app/_types/index";

export function getCategoryItem(id: number): Category {
  const categoryItem = categories.find((category) => category.id === id);
  if (!categoryItem) {
    throw new Error(`Category with id "${id}" not found`);
  }
  return categoryItem;
}
