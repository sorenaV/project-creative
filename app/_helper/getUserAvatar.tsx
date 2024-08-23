export function getUserAvatar(author: {
  name: string;
  avatar: string;
}): string {
  return author.avatar && author.name.slice(0, 2);
}
