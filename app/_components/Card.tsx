import { categories } from "../_confing/categories";
import CardDetails from "./CardDetails";

function Card() {
  return (
    <>
      {categories.map((category) => (
        <CardDetails key={category.id} category={category} />
      ))}
    </>
  );
}

export default Card;
