import { StaticImageData } from "next/image";

type StatusType = {
  votes: number | string;
  posts: number | string;
  views: number | string;
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
  icon: JSX.Element;
  description: string;
  backgroundColor: string;
  topics: string;
  posts: string;
};

export type NavElementType = {
  name: string;
  icon: JSX.Element;
  url: string;
};

export type SidebarsType = {
  isOpen: boolean;
  handleDrawer: () => void;
};

export type FilterOptionsType = {
  name: string;
  icon: JSX.Element;
  options: string[];
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

export type GroupSummeryType = {
  id?: number;
  title: string;
  subtitle: string;
  members: number;
};
