type DataType = {
  id: number;
  title: string;
  category: string;
  status: any;
  createdAt: string;
  author: { name: string; avatar: string };
};

// TYPES IS ANY

export const data: DataType[] = [
  {
    id: 1,
    title: "Creating tables in NodeBB",
    category: "General Discussion",
    status: { votes: 0, posts: 5, views: 25 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "carl",
      avatar: "C:/Users/Rapidpc/Desktop/amir-project/public/avatar.jpeg",
    },
  },
  {
    id: 2,
    title: "Iframely example!",
    category: "Comments & Feedback",
    status: { votes: 2, posts: 2, views: 13 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "sara",
      avatar: "",
    },
  },
  {
    id: 3,
    title: "Welcome to the demo instance of NodeBB!",
    category: "Announcements",
    status: { votes: 0, posts: 1, views: 250 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "admin",
      avatar: "",
    },
  },
  {
    id: 4,
    title: "Check out the NodeBB Blog!",
    category: "Blog",
    status: { votes: 0, posts: 5, views: 25 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "admin",
      avatar: "",
    },
  },
];

export const topicDetails = [
  {
    id: 1,
    title: "Creating tables in NodeBB",
    category: "General Discussion",
    status: { votes: 0, posts: 5, views: 25 },
    createdAt: "Jul 10, 2017, 10:02 PM",
    author: {
      name: "carl",
      avatar: "C:/Users/Rapidpc/Desktop/amir-project/public/avatar.jpeg",
    },
    contex: "Hey, did you know you can create tables? It's true!",
  },
];
