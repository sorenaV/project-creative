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
    category: {
      name: "General Discussion",
      url: "general-discussion",
      categoryId: 2,
    },
    status: { votes: 0, posts: 0, views: 0 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "Carl",
      avatar: avatarPic,
    },
    isRead: true,
  },
  {
    id: 2,
    title: "Iframely example!",
    category: {
      name: "Comments & Feedback",
      url: "comments-feedback",
      categoryId: 3,
    },
    status: { votes: 2, posts: 2, views: 13 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "Sara",
      avatar: avatarPic,
    },
    isRead: false,
  },
  {
    id: 3,
    title: "Welcome to the demo instance of NodeBB!",
    category: { name: "Announcements", url: "announcements", categoryId: 1 },
    status: { votes: 5, posts: 1, views: 250 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "Sorena",
      avatar: avatarPic,
    },
    isRead: true,
  },
  {
    id: 4,
    title: "Check out the NodeBB Blog!",
    category: { name: "Blogs", url: "blogs", categoryId: 4 },
    status: { votes: 12, posts: 5, views: 25 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "Admin",
      avatar: avatarPic,
    },
    isRead: true,
  },
  {
    id: 5,
    title: "Check out the NodeBB Blog!",
    category: { name: "Blogs", url: "blogs", categoryId: 4 },
    status: { votes: 22, posts: 2, views: 5 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "Admin",
      avatar: avatarPic,
    },
    isRead: true,
  },
  {
    id: 6,
    title: "Check out the NodeBB Blog!",
    category: { name: "Blogs", url: "blogs", categoryId: 4 },
    status: { votes: 0, posts: 7, views: 77 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "Admin",
      avatar: avatarPic,
    },
    isRead: true,
  },
  {
    id: 7,
    title: "Check out the NodeBB Blog!",
    category: {
      name: "Comments Feedback",
      url: "Comments-Feedback",
      categoryId: 4,
    },
    status: { votes: 1, posts: 5, views: 29 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "Admin",
      avatar: avatarPic,
    },
    isRead: true,
  },
  {
    id: 8,
    title: "NodeBB Blog!",
    category: { name: "Blogs", url: "blogs", categoryId: 4 },
    status: { votes: 3, posts: 2, views: 3 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "Sorena",
      avatar: avatarPic,
    },
    isRead: true,
  },
];

export const topicDetails: TopicDetailsType[] = [
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
    context: "Hey, did you know you can create tables? It's true!",
    isRead: true,
  },

  {
    id: 2,
    title: "Iframely example",
    category: { name: "Comments & Feedback", categoryId: 3 },
    status: { votes: 0, posts: 1, views: 25 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "Admin",
      avatar: "as",
    },
    context:
      "This plugin allows you to embed just about anything in your post, for example: GIFs from sites like Imgur:",
    isRead: true,
  },
  {
    id: 3,
    title: "Creating tables in NodeBB",
    category: { name: "Comments & Feedback", categoryId: 3 },
    status: { votes: 0, posts: 1, views: 25 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "Admin",
      avatar: "as",
    },
    context:
      "This plugin allows you to embed just about anything in your post, for example:",
    isRead: true,
  },
  {
    id: 4,
    title: "Welcome to the demo instance of NodeBB!",
    category: { name: "General Discussion", categoryId: 2 },
    status: { votes: 4, posts: 2, views: 5 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "carl",
      avatar: avatarPic,
    },
    context: `This website is a demo instance of NodeBB that you can use to try out our forum software. 
    It is a default install with minimal configuration changes.
    The following changes have been made:
    Installed nodebb-plugin-dbsearch
    Installed nodebb-plugin-emailer-sendgrid
    Installed nodebb-plugin-spam-be-gone
    Installed nodebb-plugin-iframely
    These plugins are all freely available and installable via the Admin Control Panel.`,
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
    joined: "about 6 hours ago",
    lastOnline: "3 minutes from now",
    reputation: 3,
    profileViews: 3,
  },
  {
    id: 2,
    name: "Admin",
    userName: "Admin",
    avatar: "a",
    posts: 6,
    joined: "about 6 hours ago",
    lastOnline: "3 minutes from now",
    reputation: 3,
    profileViews: 3,
  },
  {
    id: 3,
    name: "Amir",
    userName: "Amir",
    avatar: "a",
    posts: 6,
    joined: "about 6 hours ago",
    lastOnline: "3 minutes from now",
    reputation: 3,
    profileViews: 3,
  },
  {
    id: 4,
    name: "Tom",
    userName: "tom",
    avatar: "a",
    posts: 2,
    joined: "about 6 hours ago",
    lastOnline: "3 minutes from now",
    reputation: 3,
    profileViews: 3,
  },
  {
    id: 5,
    name: "Angelina",
    userName: "angelina",
    avatar: "a",
    posts: 6,
    joined: "about 6 hours ago",
    lastOnline: "3 minutes from now",
    reputation: 3,
    profileViews: 3,
  },
  {
    id: 6,
    name: "Sorena",
    userName: "sorena",
    avatar: "a",
    posts: 6,
    joined: "about 6 hours ago",
    lastOnline: "3 minutes from now",
    reputation: 3,
    profileViews: 3,
  },
];

export const groupSummeryApi: GroupSummeryType[] = [
  { id: 1, title: "Administrators", subtitle: "", members: 2 },
  {
    id: 2,
    title: "Global Moderators",
    subtitle: "Forum wide moderators",
    members: 0,
  },
  { id: 3, title: "Administrators", subtitle: "", members: 25 },
  {
    id: 4,
    title: "Global Moderators",
    subtitle: "Forum wide moderators",
    members: 0,
  },
];
