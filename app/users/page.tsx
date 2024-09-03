import { Box, List, Typography } from "@mui/material";
import { Metadata } from "next";
import SearchSortHeader from "../_components/SearchSortHeader";
import UserList from "../_components/UserList";
import { users } from "../_config/data";

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
        کاربران
      </Typography>
      <div>
        <SearchSortHeader
          fieldNames={["آنلاین", "بیشترین پست", "بیشترین شهرت"]}
        />
      </div>
      <List
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(5, 1fr)",
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
