import { FormatListBulletedRounded } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Chip,
  Divider,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { getCategoryItem } from "../_helper/getCategoryItem";
import { getUserAvatar } from "../_helper/getUserAvatar";
import type { DataType } from "../_types/index";
import CardStatus from "./CardStatus";

type ItemType = {
  item: DataType;
  pageName: string;
};

function TopicListItem({ item, pageName }: ItemType) {
  const { title, category, status, createdAt, author, id } = item;

  const {
    backgroundColor: badgeColor,
    icon,
    id: categoryId,
  } = getCategoryItem(id);

  return (
    <>
      <ListItem
        sx={{
          height: 110,
          p: 1,
          display: "flex",
        }}
      >
        <Stack direction="row" spacing={1}>
          <Avatar alt={author.name}>
            <Image
              src={author.avatar}
              alt={author.name}
              layout="fill" // Ensures the image covers the Avatar
              objectFit="cover" // Ensures the image covers the Avatar properly
            />
          </Avatar>

          <div>
            <Link href={`/topic/${id}`}>
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  fontSize: 18,
                  fontWeight: 500,
                  color: "#0d6efd",
                  mb: 1,
                }}
              >
                {title}
              </Typography>
            </Link>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{
                xs: 0,
              }}
              sx={{
                alignItems: "center",
                flexWrap: {
                  xs: "wrap", // Wrap chips on extra-small screens
                  lg: "nowrap", // Do not wrap chips on large screens
                },
                "& > :nth-of-type(1)": {
                  width: { xs: "100%", lg: "auto" },
                },
                "& > :nth-of-type(2), & > :nth-of-type(3)": {
                  display: "inline-block",
                },
              }}
            >
              {/* Just On Page Category Shows Category Chip 👇 */}

              {pageName === "category" && (
                <Link href={`/category/${categoryId}`}>
                  <Chip
                    label={category.name}
                    icon={icon}
                    color="secondary"
                    size="small"
                    sx={{
                      borderRadius: 1.5,
                      height: 25,
                      backgroundColor: badgeColor,
                      fontSize: 11,
                      fontWeight: 700,
                      maxWidth: "70vw",
                      mb: 0.1,
                    }}
                  />
                </Link>
              )}
              <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                <Chip
                  label={createdAt}
                  variant="outlined"
                  size="small"
                  sx={{
                    borderRadius: 2,
                    fontSize: 10,
                    border: {
                      xs: "1px solid #e9ecef",
                      md: "none",
                    },
                    opacity: 0.7,
                  }}
                />
                <Chip
                  label={`${status.posts} posts`}
                  variant="outlined"
                  size="small"
                  sx={{
                    borderRadius: 2,
                    fontSize: 10,
                    border: "1px solid #e9ecef",
                    display: {
                      xs: "flex",
                      lg: "none",
                    },
                    opacity: 0.7,
                    width: "fit-content",
                  }}
                />
              </Box>
            </Stack>
          </div>
        </Stack>
        <Stack direction="row" spacing={5} sx={{ ml: "auto" }}>
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
      </ListItem>
      <Divider variant="fullWidth" />
    </>
  );
}

export default TopicListItem;
