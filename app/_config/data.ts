import type {
  DataType,
  GroupItemType,
  TopicDetailsType,
  UsersType,
} from "../_types";

import avatarPic from "@/public/avatar.jpeg";

export const topicsData: DataType[] = [
  {
    id: 1,
    title: "ساختن جدول در نودبی",
    category: {
      name: "بحث های عمومی",
      url: "general-discussion",
      categoryId: 2,
    },
    status: { votes: 0, posts: 0, views: 0 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "کارل",
      avatar: avatarPic,
      username: "carl",
    },
    isRead: true,
  },
  {
    id: 2,
    title: "مثال ایفریملی",
    category: {
      name: "نطرات",
      url: "comments-feedback",
      categoryId: 3,
    },
    status: { votes: 2, posts: 2, views: 13 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "سارا",
      avatar: avatarPic,
      username: "sara",
    },
    isRead: false,
  },
  {
    id: 3,
    title: "به نسخه دمو برنامه خوش آمدید",
    category: { name: "اطلاعیه ها", url: "announcements", categoryId: 1 },
    status: { votes: 5, posts: 1, views: 250 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "سورنا",
      avatar: avatarPic,
      username: "sorena",
    },
    isRead: true,
  },
  {
    id: 4,
    title: "یه سری به نودبی بزنید",
    category: { name: "Blogs", url: "blogs", categoryId: 4 },
    status: { votes: 12, posts: 5, views: 25 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "ادمین",
      avatar: avatarPic,
      username: "admin",
    },
    isRead: true,
  },
  {
    id: 5,
    title: "یه سری به نودبی بزنید",
    category: { name: "Blogs", url: "blogs", categoryId: 4 },
    status: { votes: 22, posts: 2, views: 5 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "ادمین",
      avatar: avatarPic,
      username: "admin",
    },
    isRead: true,
  },
  {
    id: 6,
    title: "یه سری به نودبی بزنید",
    category: { name: "Blogs", url: "blogs", categoryId: 4 },
    status: { votes: 0, posts: 7, views: 77 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "ادمین",
      avatar: avatarPic,
      username: "admin",
    },
    isRead: true,
  },
  {
    id: 7,
    title: "یه سری به نودبی بزنید",
    category: {
      name: "نظرات",
      url: "Comments-Feedback",
      categoryId: 3,
    },
    status: { votes: 1, posts: 5, views: 29 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "ادمین",
      avatar: avatarPic,
      username: "admin",
    },
    isRead: true,
  },
  {
    id: 8,
    title: "نودبی بلاگ",
    category: { name: "Blogs", url: "blogs", categoryId: 4 },
    status: { votes: 3, posts: 2, views: 3 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "سورنا",
      avatar: avatarPic,
      username: "sorena",
    },
    isRead: true,
  },
];

export const topicDetails: TopicDetailsType[] = [
  {
    id: 1,
    title: "ساختن جدول در نودبی",
    category: {
      name: "بحث های عمومی",
      categoryId: 2,
      url: "general-discussion",
    },
    status: { votes: 0, posts: 5, views: 25 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "کارل",
      avatar: avatarPic,
      username: "carl",
    },
    context: "سلام، آیا می دانستید که می توانید جداول ایجاد کنید؟ درست است!",
    isRead: true,
  },

  {
    id: 2,
    title: "مثالی از آیفریملی",
    category: {
      name: "نظرات",
      categoryId: 3,
      url: "comments-feedback",
    },
    status: { votes: 0, posts: 1, views: 25 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "ادمین",
      avatar: "as",
      username: "admin",
    },
    context:
      "این افزونه به شما امکان می دهد تقریباً هر چیزی را در پست خود جاسازی کنید، به عنوان مثال: GIF از سایت هایی مانند Imgur:",
    isRead: true,
  },
  {
    id: 3,
    title: "به نسخه دمو برنامه خوش آمدید",
    category: { name: "اطلاعیه ها", url: "announcements", categoryId: 1 },
    status: { votes: 4, posts: 2, views: 5 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "کارل",
      avatar: avatarPic,
      username: "carl",
    },
    context: `این وب‌سایت نمونه‌ای از NodeBB است که می‌توانید از آن برای آزمایش نرم‌افزار انجمن ما استفاده کنید. این یک نصب پیش فرض با حداقل تغییرات پیکربندی است. تغییرات زیر ایجاد شده است: Nodebb-plugin-dbsearch نصب شده nodebb-plugin-emailer-sendgrid نصب شده nodebb-plugin-spam-be-gone نصب شده nodebb-plugin-iframely این پلاگین ها همگی آزادانه در دسترس هستند و از طریق کنترل پنل مدیریت قابل نصب هستند. .`,
    isRead: true,
  },
];

export const tags = [];

export const users: UsersType[] = [
  {
    id: 1,
    name: "کارل",
    userName: "carl",
    avatar: "/public/avatar",
    posts: 12,
    joined: "2 ماه پیش",
    lastOnline: "3 دقیقه پیش",
    reputation: 12,
    profileViews: 3,
  },
  {
    id: 2,
    name: "ادمین",
    userName: "admin",
    avatar: "/public/avatar",
    posts: 3,
    joined: "2 ماه پیش",
    lastOnline: "3 دقیقه پیش",
    reputation: 25,
    profileViews: 3,
  },
  {
    id: 3,
    name: "امیر",
    userName: "Amir",
    avatar: "/public/avatar",
    posts: 1,
    joined: "2 ماه پیش",
    lastOnline: "3 دقیقه پیش",
    reputation: 0,
    profileViews: 3,
  },
  {
    id: 4,
    name: "رادین",
    userName: "radin",
    avatar: "/public/avatar",
    posts: 10,
    joined: "2 ماه پیش",
    lastOnline: "3 دقیقه پیش",
    reputation: 1,
    profileViews: 3,
  },
  {
    id: 5,
    name: "آرتمیس",
    userName: "artemis",
    avatar: "/public/avatar",
    posts: 2,
    joined: "2 ماه پیش",
    lastOnline: "3 دقیقه پیش",
    reputation: 32,
    profileViews: 3,
  },
  {
    id: 6,
    name: "سورنا",
    userName: "sorena",
    avatar: "/public/avatar",
    posts: 1,
    joined: "2 ماه پیش",
    lastOnline: "3 دقیقه پیش",
    reputation: 1,
    profileViews: 3,
  },
];

export const groupItemData: GroupItemType[] = [
  {
    id: 1,
    title: "مدیریت",
    subtitle: "",
    members: 2,
    createdAt: "Jul 10, 2017, 10:02 PM",
  },
  {
    id: 2,
    title: "مدیران انجمن",
    subtitle: "مدیران انجمن",
    members: 0,
    createdAt: "Jul 25, 2017, 10:02 PM",
  },
  {
    id: 3,
    title: "یا مدیران",
    subtitle: "",
    members: 25,
    createdAt: "Jul 29, 2017, 10:02 PM",
  },
  {
    id: 4,
    title: "شخصی",
    subtitle: "انجمن شخصی",
    members: 0,
    createdAt: "Jul 02, 2017, 10:02 PM",
  },
  {
    id: 5,
    title: "الفبا",
    subtitle: "",
    members: 21,
    createdAt: "Jul 10, 2017, 10:02 PM",
  },
];
