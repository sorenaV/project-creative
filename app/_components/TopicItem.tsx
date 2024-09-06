import Image from "next/image";
import Link from "next/link";

import type { DataType } from "../_types/index";
import { getCategoryItem } from "../_utils/helpers";
import CardStatus from "./CardStatus";

import {
  ChatBubbleOutline,
  KeyboardArrowUpOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { Avatar, Divider, ListItem, Stack, Typography } from "@mui/material";
import CategoryChip from "./CategoryChip";
import ChipBox from "./ChipBox";

type ItemType = {
  item: DataType;
  pageName: string;
};

function TopicItem({ item, pageName }: ItemType) {
  const { title, category, status, createdAt, author, id } = item;

  const {
    backgroundColor: badgeColor,
    icon,
    id: categoryId,
  } = getCategoryItem(category.categoryId);

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
          <Avatar alt={author.name} sx={{ width: 50, height: 50 }}>
            <Image src={author.avatar} alt={author.name} fill />
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
              spacing={0}
              sx={{
                alignItems: {
                  xs: "flex-start",
                  sm: "center",
                },
                flexWrap: {
                  xs: "wrap", // Wrap chips on extra-small screens
                  lg: "nowrap", // Do not wrap chips on large screens
                },
              }}
            >
              {/* Just On Page Category Shows Category Chip 👇 */}

              {pageName === "category" && (
                <CategoryChip categoryId={categoryId} />
              )}

              <Stack direction="row" spacing={1} margin={1}>
                <ChipBox label={createdAt} labelNumber="" />
                <ChipBox label="پست" labelNumber={status.posts} />
              </Stack>
            </Stack>
          </div>
        </Stack>

        <Stack direction="row" spacing={1} sx={{ ml: "auto" }}>
          <CardStatus
            cardNum={status.views}
            cardLabel="بازدید"
            cardIcon={<VisibilityOutlined fontSize="small" color="action" />}
          />
          <CardStatus
            cardNum={status.posts}
            cardLabel="پست"
            cardIcon={<ChatBubbleOutline fontSize="small" color="action" />}
          />
          <CardStatus
            cardNum={status.votes}
            cardLabel="رای"
            cardIcon={
              <KeyboardArrowUpOutlined fontSize="medium" color="action" />
            }
          />
        </Stack>
      </ListItem>
      <Divider variant="fullWidth" />
    </>
  );
}

export default TopicItem;
