import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import CardStatus from "./CardStatus";
import Link from "next/link";

import type { Category } from "../_types";
import { getCategoryItem } from "../_helper/getCategoryItem";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";

type Props = {
  category: Category;
};

function CardDetails({ category }: Props) {
  const { backgroundColor } = getCategoryItem(category.id);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "auto",
          height: "6rem",
        }}
      >
        <List>
          <ListItem sx={{ padding: 0, height: "100%", fontSize: 10 }}>
            <ListItemIcon
              sx={{
                backgroundColor: `${backgroundColor}`,
                borderRadius: "0.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: "0.8rem",
                mr: "0.5rem",
              }}
            >
              {category.icon}
            </ListItemIcon>

            <Link href={`/category/${category.id}`}>
              <ListItemText
                primary={category.name}
                secondary={category.description}
                primaryTypographyProps={{
                  sx: {
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  },
                  fontSize: {
                    xs: 20,
                    md: 25,
                  },
                  fontWeight: 500,
                  color: "#343a40",
                }}
                secondaryTypographyProps={{
                  fontSize: {
                    xs: 12,
                    md: 15,
                  },
                  color: "#676b70",
                }}
              />
            </Link>
          </ListItem>
        </List>

        <Stack direction="row" spacing={5}>
          <CardStatus
            cardLabel="Topics"
            cardNum={category.posts}
            cardIcon={
              <FormatListBulletedRoundedIcon fontSize="small" color="action" />
            }
          />
          <CardStatus
            cardLabel="Topics"
            cardNum={category.posts}
            cardIcon={<ChatBubbleRoundedIcon fontSize="small" color="action" />}
          />
        </Stack>
      </Box>
      <Divider />
    </>
  );
}

export default CardDetails;
