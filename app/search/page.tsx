import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { Metadata } from "next";
import SearchSelect from "../_components/SearchSelect";

export const metadata: Metadata = {
  title: "Search",
};

function Page(): JSX.Element {
  return (
    <Grid2 container spacing={5}>
      <Grid2 xs={12} md={3}>
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontSize: 25, mt: 3, fontWeight: 500 }}
        >
          Search
        </Typography>
        <TextField
          id="outlined-basic"
          label="Type to search"
          variant="outlined"
          sx={{
            mt: 2,
            fontSize: 12,
            width: "100%",
            display: "Block",
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "blue", // Change the border color on hover
            },
            "&:hover .MuiInputLabel-root": {
              color: "blue", // Change the label color on hover
              fontSize: 12,
            },
          }}
        />
        <Button
          sx={{
            backgroundColor: lightBlue["A700"],
            color: "#fff",
            mt: 2,
            width: 1,
            height: "42px",
          }}
        >
          Search
        </Button>
      </Grid2>

      <Grid2 xs={12} md={7}>
        <Stack>
          <Box padding={5}>
            <SearchSelect />
          </Box>
          <Divider />
          <Box>as</Box>
        </Stack>
      </Grid2>
    </Grid2>
  );
}

export default Page;
