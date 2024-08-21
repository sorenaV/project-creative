import { categories } from "../_confing/categories";

type Arguments = (name: string) => string | undefined;

export function getBgColor(name: string): Arguments {
  const bgColor = categories.find(
    (category) => category.name === name
  )?.backgroundColor;

  return bgColor;
}
