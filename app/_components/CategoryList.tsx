import { categories } from "../_config/categories";
import CategoryItem from "./CategoryItem";

function CategoryList() {
  return (
    <>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </>
  );
}

export default CategoryList;
