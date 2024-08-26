import { data } from "../_confing/data";
import SearchItem from "./SearchItem";
import { categories } from "../_confing/categories";

function SearchList({ filter }) {
  const topics = data;
  if (!topics.length) return null;

  let filterValue = topics;

  // Apply category filter if provided
  if (filter.categories) {
    const categories = filter.categories.split(",");
    filterValue = topics.filter((item) =>
      categories.includes(item.category.url)
    );
  }

  // Apply user filter if provided
  if (filter.users) {
    const users = filter.users.split(",");
    filterValue = topics.filter((item) => users.includes(item.author.name));
  }

  // Apply category AND user filter if provided
  if (filter.users && filter.categories) {
    const categories = filter.categories.split("_");
    const users = filter.users.split("_");
    filterValue = topics.filter(
      (topic) =>
        users.includes(topic.author.name) &&
        categories.includes(topic.category.url)
    );
  }
  // Apply status sort if provided
  if (filter.sortBy) {
    const modifier = filter.order === "asc" ? 1 : -1;
    const sortedCabin = filterValue.sort(
      (a, b) => (a.status[filter.sortBy] - b.status[filter.sortBy]) * modifier
    );
  }

  return (
    <div>
      {filterValue.map((topic) => (
        <SearchItem key={topic.id} result={topic} />
      ))}
    </div>
  );
}

export default SearchList;
