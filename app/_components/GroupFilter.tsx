import { groupItemData } from "../_config/data";
import GroupItem from "./GroupItem";

type Sort = { sort: string; searchTerm: string };

function GroupFilter({ sort, searchTerm }: Sort) {
  const valueHolder = groupItemData;
  let displayGroup = groupItemData;

  //if no filter provided
  if (sort === "all") displayGroup = valueHolder;

  if (sort === "group-name")
    displayGroup = valueHolder.sort((a, b) =>
      a.title.localeCompare(b.title, "fa")
    );

  if (sort === "members")
    displayGroup = valueHolder.sort((a, b) => b.members - a.members);

  if (sort === "created-at")
    displayGroup = valueHolder.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  // Apply search
  if (searchTerm) {
    const term = searchTerm.toLowerCase();

    displayGroup = valueHolder.filter((item) =>
      item.title.toLowerCase().includes(term)
    );
  }

  return displayGroup.map((group) => (
    <GroupItem
      key={group.id}
      title={group.title}
      subtitle={group.subtitle}
      members={group.members}
      createdAt={group.createdAt}
    />
  ));
}
export default GroupFilter;
