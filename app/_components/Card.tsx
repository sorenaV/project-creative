import { categories } from "../_confing/categories";
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
