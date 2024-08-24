import { StaticImageData } from "next/image";

type StatusType = {
  votes: number;
  posts: number;
  views: number;
};
type AuthorType = { name: string; avatar: StaticImageData | string };

type CategoryType = {
  name: string;
  categoryId: number;
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
};

export type GroupSummeryType = {
  id: number;
  title: string;
  subtitle: string;
  members: number;
};
