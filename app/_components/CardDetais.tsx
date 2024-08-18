import { HomeRepairServiceOutlined } from "@mui/icons-material";
import {
  Box,
  colors,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

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
  topics = "",
  posts = "",
}: Props) {
  return (
    <>
      <Grid container>
        <Grid
          xs={12}
          md={6}
          sx={{
            height: "6rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
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
          </Box>
        </Grid>

        {/* <Grid md={4} display="flex" justifyContent="end" gap={1}>
          <Stack
            sx={{ padding: "1rem", backgroundColor: "#f9f9f9", border: 1 }}
          >
            {topics}
            <Typography fontSize={10}>Topics</Typography>
          </Stack>
          <Stack
            sx={{ padding: "1rem", backgroundColor: "#f9f9f9", border: 1 }}
          >
            {posts}
            <Typography fontSize={10}>posts</Typography>
          </Stack>
        </Grid> */}
      </Grid>
      <Divider component="p" />
    </>
  );
}

export default CardDetails;
