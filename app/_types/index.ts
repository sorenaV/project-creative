import { StaticImageData } from "next/image";

type StatusType = {
  [key: string]: number;
  votes: number;
  posts: number;
  views: number;
};
export type AuthorType = {
  name: string;
  avatar: StaticImageData | string;
  username: string;
};

type CategoryType = {
  name: string;
  categoryId: number;
  url: string;
};

export type DataType = {
  id: number;
  title: string;
  category: CategoryType;
  status: StatusType;
  createdAt: string;
  author: AuthorType;
  isRead: Boolean;
};

export type TopicDetailsType = {
  id: number;
  title: string;
  category: CategoryType;
  status: StatusType;
  createdAt: string;
  author: AuthorType;
  context: string;
  isRead: Boolean;
};

export type Category = {
  id: number;
  name: string;
  url: string;
  icon: React.ReactNode;
  description: string;
  backgroundColor: string;
  topics: string;
  posts: string;
};

export type NavElementType = {
  name: string;
  icon: React.ReactNode;
  url: string;
};

export type SidebarsType = {
  isOpen: boolean;
  handleDrawer: () => void;
};

export type Options = {
  label: string;
  value: string;
};

export type FilterOptionsType = {
  name: string;
  icon: React.ReactNode;
  options: Options[];
};

export type UsersType = {
  id: number;
  name: string;
  userName: string;
  avatar: string;
  posts: number;
  joined: string;
  lastOnline: string;
  reputation: number;
  profileViews: number;
};

export type GroupItemType = {
  id?: number;
  title: string;
  subtitle: string;
  members: number;
  createdAt: string;
};
