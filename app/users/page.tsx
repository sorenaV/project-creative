import { Search } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  InputAdornment,
  List,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Metadata } from "next";
import { users } from "../_confing/data";
import UserList from "../_components/UserList";

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
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ alignItems: { xs: "normal", sm: "center" } }}
        >
          <ButtonGroup
            variant="text"
            aria-label="Basic button group"
            sx={{ my: 2 }}
          >
            <Button>Online</Button>
            <Button>Top posters</Button>
            <Button>Most Reputation</Button>
          </ButtonGroup>
          <TextField
            size="small"
            label="Search"
            sx={{
              width: { xs: "100%", sm: 200 }, // Control the width; adjust as needed
              height: "30px", // Set a specific height
              ml: { xs: "none", sm: "auto" },
              mt: { xs: 1, sm: 0 },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{
                      backgroundColor: "blue",
                      color: "white",
                      padding: "4px", // Adjust padding for the button size
                      "& .MuiSvgIcon-root": {
                        fontSize: 18, // Adjust icon size
                      },
                    }}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Divider sx={{ mt: 2 }} />
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
