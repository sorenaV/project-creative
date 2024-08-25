import type {
  DataType,
  GroupSummeryType,
  TopicDetailsType,
  UsersType,
} from "../_types";

import avatarPic from "@/public/avatar.jpeg";
export const data: DataType[] = [
  {
    id: 1,
    title: "Creating tables in NodeBB",
    category: { name: "General Discussion", categoryId: 2 },
    status: { votes: 0, posts: 5, views: 25 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "carl",
      avatar: avatarPic,
    },
    isRead: true,
  },
  {
    id: 2,
    title: "Iframely example!",
    category: { name: "Comments & Feedback", categoryId: 3 },
    status: { votes: 2, posts: 2, views: 13 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "sara",
      avatar: avatarPic,
    },
    isRead: false,
  },
  {
    id: 3,
    title: "Welcome to the demo instance of NodeBB!",
    category: { name: "Announcements", categoryId: 1 },
    status: { votes: 0, posts: 1, views: 250 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "admin",
      avatar: avatarPic,
    },
    isRead: true,
  },
  {
    id: 4,
    title: "Check out the NodeBB Blog!",
    category: { name: "Blogs", categoryId: 4 },
    status: { votes: 0, posts: 5, views: 25 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "admin",
      avatar: avatarPic,
    },
    isRead: true,
  },
  {
    id: 4,
    title: "Check out the NodeBB Blog!",
    category: { name: "Blogs", categoryId: 4 },
    status: { votes: 0, posts: 5, views: 25 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "admin",
      avatar: avatarPic,
    },
    isRead: true,
  },
  {
    id: 4,
    title: "Check out the NodeBB Blog!",
    category: { name: "Blogs", categoryId: 4 },
    status: { votes: 0, posts: 5, views: 25 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "admin",
      avatar: avatarPic,
    },
    isRead: true,
  },
  {
    id: 4,
    title: "Check out the NodeBB Blog!",
    category: { name: "Blogs", categoryId: 4 },
    status: { votes: 0, posts: 5, views: 25 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "admin",
      avatar: "/",
    },
    isRead: true,
  },
];

export const topicDetails: TopicDetailsType[] = [
  {
    id: 2,
    title: "Creating tables in NodeBB",
    category: { name: "General Discussion", categoryId: 2 },
    status: { votes: 0, posts: 5, views: 25 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "carl",
      avatar: avatarPic,
    },
    context: "Hey, did you know you can create tables? It's true!",
    isRead: true,
  },

  {
    id: 3,
    title: "Creating tables in NodeBB",
    category: { name: "Comments & Feedback", categoryId: 3 },
    status: { votes: 0, posts: 1, views: 25 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "admin",
      avatar: "as",
    },
    context:
      "This plugin allows you to embed just about anything in your post, for example:",
    isRead: true,
  },
  {
    id: 4,
    title: "Creating tables in NodeBB",
    category: { name: "Comments & Feedback", categoryId: 3 },
    status: { votes: 0, posts: 1, views: 25 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "admin",
      avatar: "as",
    },
    context:
      "This plugin allows you to embed just about anything in your post, for example:",
    isRead: true,
  },
];

export const tags = [];

export const users: UsersType[] = [
  {
    id: 1,
    name: "Carl",
    userName: "carl",
    avatar: "a",
    posts: 2,
  },
  {
    id: 2,
    name: "Admin",
    userName: "admin",
    avatar: "a",
    posts: 6,
  },
  {
    id: 3,
    name: "Amir",
    userName: "Amir",
    avatar: "a",
    posts: 6,
  },
  {
    id: 4,
    name: "Tom",
    userName: "tom",
    avatar: "a",
    posts: 2,
  },
  {
    id: 5,
    name: "Angelina",
    userName: "angelina",
    avatar: "a",
    posts: 6,
  },
  {
    id: 6,
    name: "Sorena",
    userName: "sorena",
    avatar: "a",
    posts: 6,
  },
];

export const groupSummeryApi: GroupSummeryType[] = [
  { id: 1, title: "administrators", subtitle: "", members: 2 },
  {
    id: 2,
    title: "Global Moderators",
    subtitle: "Forum wide moderators",
    members: 0,
  },
  { id: 3, title: "administrators", subtitle: "", members: 25 },
  {
    id: 4,
    title: "Global Moderators",
    subtitle: "Forum wide moderators",
    members: 0,
  },
];
