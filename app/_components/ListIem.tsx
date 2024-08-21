import {
  Avatar,
  Box,
  Chip,
  Divider,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import CardStatus from "./CardStatus";
import { FormatListBulletedRounded } from "@mui/icons-material";
import { categories } from "../_confing/categories";
import { getBgColor } from "../_helper/getBgColor";

function ListItem({ item }) {
  const { title, category, status, createdAt, author, id } = item;
  const badgeColor = getBgColor(category);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: {
            xs: 110,
          },
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            sx={{ bgcolor: "purple", width: 40, height: 40 }}
            src={author.avatar}
          >
            {author.avatar ? null : author.name.slice(0, 2)}
          </Avatar>
          <Stack spacing={1}>
            <Link href={`/topic/topicId=${id}`}>
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontSize: 20, fontWeight: 500, color: "#0d6efd" }}
              >
                {title}
              </Typography>
            </Link>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Link href="/">
                <Chip
                  label={category}
                  color="secondary"
                  sx={{
                    borderRadius: 1.5,
                    height: 25,
                    backgroundColor: badgeColor,
                  }}
                />
              </Link>
              <Chip
                label="Jun 9, 2022, 5:57 AM"
                variant="outlined"
                sx={{
                  borderRadius: 2,
                  border: {
                    xs: "1px solid #e9ecef",
                    md: "none",
                  },
                }}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={9} sx={{ ml: "auto" }}>
          <CardStatus
            cardNum={status.views}
            cardLabel="Views"
            cardIcon={
              <FormatListBulletedRounded fontSize="small" color="action" />
            }
          />
          <CardStatus
            cardNum={status.posts}
            cardLabel="Posts"
            cardIcon={
              <FormatListBulletedRounded fontSize="small" color="action" />
            }
          />
          <CardStatus
            cardNum={status.votes}
            cardLabel="Votes"
            cardIcon={
              <FormatListBulletedRounded fontSize="small" color="action" />
            }
          />
        </Stack>
      </Box>
      <Divider variant="fullWidth" />
    </>
  );
}

export default ListItem;
