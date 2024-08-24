import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Metadata } from "next";

import GroupSummery from "../_components/GroupSummety";
import { groupSummeryApi } from "../_confing/data";

export const metadata: Metadata = {
  title: "Groups",
};

function Page() {
  const groupSummerydata = groupSummeryApi;
  return (
    <Box>
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: 25, mt: 5, fontWeight: 500 }}
      >
        Groups
      </Typography>
      <Box sx={{ mt: { xs: 1, md: 0 } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ alignItems: { xs: "normal", sm: "center" } }}
        >
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontSize: 16,
              opacity: 0.5,
              fontWeight: 500,
            }}
          >
            Sort by
          </Typography>
          <ButtonGroup variant="text" aria-label="Basic button group">
            <Button sx={{ color: "#000", height: 30, fontSize: 12 }}>
              Online
            </Button>
            <Button sx={{ color: "#000", height: 30, fontSize: 12 }}>
              Top posters
            </Button>
            <Button sx={{ color: "#000", height: 30, fontSize: 12 }}>
              Most Reputation
            </Button>
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
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: 1,
          mt: 3,
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          },
        }}
      >
        {groupSummerydata.map((group) => (
          <GroupSummery
            key={group.id}
            title={group.title}
            subtitle={group.subtitle}
            members={group.members}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Page;
