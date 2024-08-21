import { HomeRepairServiceOutlined } from "@mui/icons-material";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";

import {
  Box,
  colors,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import Link from "next/link";
import CardStatus from "./CardStatus";

type Props = {
  bg: string;
  icon?: any;
  title: string;
  description: string;
  topics: string;
  posts: string;
};

function CardDetails({
  bg = "blue",
  icon = <HomeRepairServiceOutlined fontSize="small" />,
  title = "Overview",
  description = "hellosdsd",
  topics = "Hello",
  posts = "5",
}: Props) {
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
          <ListItem
            component={Link}
            href="/unread"
            sx={{ padding: 0, height: "100%", fontSize: 10 }}
          >
            <ListItemIcon
              sx={{
                backgroundColor: `${bg}`,
                borderRadius: "0.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0.5rem",
                mr: "0.5rem",
              }}
            >
              {icon}
            </ListItemIcon>

            <ListItemText
              primary={title}
              secondary={description}
              primaryTypographyProps={{
                fontSize: 25,
                fontWeight: 500,
                color: "#343a40",
              }}
              secondaryTypographyProps={{
                fontSize: 15,
                color: "#676b70",
              }}
            />
          </ListItem>
        </List>

        <Stack direction="row" spacing={9}>
          <CardStatus
            cardLabel="Topics"
            cardNum={posts}
            cardIcon={
              <FormatListBulletedRoundedIcon fontSize="small" color="action" />
            }
          />
          <CardStatus
            cardLabel="Topics"
            cardNum={posts}
            cardIcon={<ChatBubbleRoundedIcon fontSize="small" color="action" />}
          />
        </Stack>
      </Box>
      <Divider />
    </>
  );
}

export default CardDetails;

{
  /* <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
<Box
  bgcolor={bg}
  padding={1}
  borderRadius={1}
  display="flex"
  justifyContent="center"
>
  {icon}
</Box>
<Box>
  <Link href="/" passHref>
    <Typography
      variant="body1"
      sx={{ textDecoration: "none" }}
      fontWeight={500}
      fontSize={22}
      fontStyle="#343a40"
    >
      {title}
    </Typography>
  </Link>

  <Typography
    variant="body2"
    fontSize={14}
    fontWeight={200}
    sx={{ fontWeight: 200 }}
  >
    {description}
  </Typography>
</Box>
</Box> */
}
