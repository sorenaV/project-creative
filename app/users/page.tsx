import { Box, List, Typography } from "@mui/material";
import { Metadata } from "next";
import SearchSortHeader from "../_components/SearchSortHeader";
import UserList from "../_components/UserList";
import { users } from "../_confing/data";

export const metadata: Metadata = {
  title: "Users",
};

function Page() {
  const usersPage = users;
  return (
    <Box>
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: 25, mt: 5, fontWeight: 500 }}
      >
        Users
      </Typography>
      <div>
        <SearchSortHeader
          fieldNames={["Online", "Top Posters", "Most Reputation"]}
        />
      </div>
      <List
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)", // 2 columns for small screens
            md: "repeat(3, 1fr)", // 3 columns for medium screens
            lg: "repeat(4, 1fr)", // 4 columns for large screens
            xl: "repeat(5, 1fr)", // 5 columns for extra-large screens
          },
        }}
      >
        {usersPage.map(({ avatar, name, userName, posts, id }) => (
          <UserList
            key={id}
            avatar={avatar}
            name={name}
            userName={userName}
            posts={posts}
          />
        ))}
      </List>
    </Box>
  );
}

export default Page;
