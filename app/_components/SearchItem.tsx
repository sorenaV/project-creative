import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import { DataType } from "../_types";
import { orange, purple } from "@mui/material/colors";

function SearchItem({ result }: { result: DataType }) {
  return (
    <Box>
      <Typography
        variant="h3"
        component="h3"
        sx={{ fontSize: 16, fontWeight: 500, mt: 2 }}
      >
        {result.title}
      </Typography>
      <Stack direction="row" spacing={2} marginTop={1} alignItems="center">
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            src={`${result.author.avatar}`}
            alt={`${result.author.name}`}
            sx={{ width: 20, height: 20, backgroundColor: purple[900] }}
          />
          <Typography sx={{ fontSize: 14 }}>{result.author.name}</Typography>
        </Stack>
        <Typography
          variant="body1"
          component="p"
          sx={{ opacity: 0.9, fontSize: 12 }}
        >
          {result.createdAt}
        </Typography>
        -- {result.category.name} --
        {result.status.posts} posts --
        {result.status.views} views --
        {result.status.votes} votes --
      </Stack>
      <Divider sx={{ mt: 2 }} />
    </Box>
  );
}

export default SearchItem;
