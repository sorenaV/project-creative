import { ArrowDownwardRounded, ArrowUpwardRounded } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { getUserAvatar } from "../_helper/getUserAvatar";

function MobilePost({ author, createdAt, context, votes }) {
  const avatar = getUserAvatar(author);
  return (
    <Box sx={{ mt: 5 }}>
      <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
        <Avatar src={avatar} sx={{ width: 22, height: 22 }}>
          {avatar}
        </Avatar>
        <Typography sx={{ color: "#0d6efd", fontSize: 14, fontWeight: 700 }}>
          sd
        </Typography>
        <Typography sx={{ fontSize: 12, opacity: 0.5 }}>
          wrote on {createdAt}
        </Typography>
      </Stack>
      <Box
        sx={{
          mt: {
            xs: 1,
            md: 2,
          },
        }}
      >
        <div>{context}</div>
      </Box>

      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ justifyContent: "flex-end", my: 1 }}
      >
        <IconButton sx={{ color: "#0d6efd" }}>
          <ArrowUpwardRounded />
        </IconButton>
        <Typography sx={{ opacity: 0.5, fontSize: 14 }}>{votes}</Typography>
        <IconButton sx={{ color: "#0d6efd" }}>
          <ArrowDownwardRounded />
        </IconButton>
      </Stack>

      <Divider variant="fullWidth" />
    </Box>
  );
}

export default MobilePost;
