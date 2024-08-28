import { data } from "../_config/data";
import SearchItem from "./SearchItem";

type FilterType = {
  categories?: string;
  users?: string;
  tag?: string;
  sortBy: string;
  order: string;
  term?: string;
};

function SearchList({ filter }: { filter: FilterType }) {
  const topics = data;
  if (!filter) return;
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
    const categories = filter.categories.split(",");
    const users = filter.users.split(",");
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

  // Apply search
  if (filter.term) {
    const searchTerm = filter.term.toLowerCase();

    filterValue = filterValue.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
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
