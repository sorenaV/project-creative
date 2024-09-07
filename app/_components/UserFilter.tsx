import { users } from "../_config/data";
import UsersList from "./UsersList";

type Sort = { sort: string; searchTerm: string };

function UserFilter({ sort, searchTerm }: Sort) {
  const valueHolder = users;
  let displayUsers = users;

  //if no filter provided
  if (sort === "all") displayUsers = valueHolder;

  if (sort === "online")
    displayUsers = valueHolder.sort(
      (a, b) =>
        new Date(b.lastOnline).getTime() - new Date(a.lastOnline).getTime()
    );

  if (sort === "posts")
    displayUsers = valueHolder.sort((a, b) => b.posts - a.posts);

  if (sort === "reputation")
    displayUsers = valueHolder.sort((a, b) => b.reputation - a.reputation);

  // Apply search
  if (searchTerm) {
    const term = searchTerm.toLowerCase();

    displayUsers = valueHolder.filter((item) =>
      item.name.toLowerCase().includes(term)
    );
  }

  return displayUsers.map(({ avatar, name, userName, posts, id }) => (
    <UsersList
      key={id}
      avatar={avatar}
      name={name}
      userName={userName}
      posts={posts}
    />
  ));
}
export default UserFilter;
