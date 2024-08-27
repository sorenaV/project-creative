import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import Link from "next/link";
import React from "react";

type UserListType = {
  avatar: string;
  name: string;
  userName: string;
  posts: number;
};

function UserList({ avatar, name, userName, posts }: UserListType) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt={name} src={avatar} sx={{ bgcolor: blue[900] }} />
      </ListItemAvatar>
      <Link href={`users/${userName}`}>
        <ListItemText
          primary={name}
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                @{userName}
              </Typography>
              <Typography
                sx={{ display: "block" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {posts}
              </Typography>
            </>
          }
        />
      </Link>
    </ListItem>
  );
}

export default UserList;
