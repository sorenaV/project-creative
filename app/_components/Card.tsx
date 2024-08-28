import { categories } from "../_config/categories";
import CardItem from "./CardItem";

function Card() {
  return (
    <>
      {categories.map((category) => (
        <CardItem key={category.id} category={category} />
      ))}
    </>
  );
}

export default Card;
