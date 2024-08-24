import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

import bannerImage from "@/public/bannerimage.png";
import { GroupSummeryType } from "../_types";
import { Person } from "@mui/icons-material";

function GroupSummery({ title, subtitle, members }: GroupSummeryType) {
  return (
    <Card sx={{ boxShadow: 0, border: "1px solid #e9ecef" }}>
      <CardActionArea>
        <CardMedia sx={{ position: "relative", height: 140 }}>
          <Image src={bannerImage} alt="default banner" fill />
        </CardMedia>
        <CardContent>
          <Stack direction="row">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontSize: 16, fontWeight: 500 }}
            >
              {title}
            </Typography>
            <Typography sx={{ ml: "auto" }}>
              <Person sx={{ opacity: 0.6 }} />
              {members}
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default GroupSummery;
