import Link from "next/link";
import React from "react";

import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";

type UsersListType = {
  avatar: string;
  name: string;
  userName: string;
  posts: number;
};

function UsersList({ avatar, name, userName, posts }: UsersListType) {
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

export default UsersList;
