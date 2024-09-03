import { Chip, IconButton, Stack } from "@mui/material";
import Link from "next/link";
import { getCategoryItem } from "../_helper/getCategoryItem";

function Chips({ category, status }) {
  const { name, backgroundColor, icon } = getCategoryItem(category);

  const chipStyle = { borderRadius: 2 };

  return (
    <Stack
      sx={{
        mt: 2,
        flexDirection: {
          xs: "column", // Stack items vertically on extra small screens
          sm: "row", // Stack items horizontally on small screens and up
        },
        gap: 1,
      }}
    >
      <Link href={`/category/${category}`}>
        <Chip
          label={`${name}`}
          variant="outlined"
          size="small"
          sx={{
            ...chipStyle,
            backgroundColor: backgroundColor,
            color: "#fff",
            fontWeight: 500,
            border: 0,
          }}
          icon={<IconButton size="small">{icon}</IconButton>}
        />
      </Link>

      <Stack direction="row" spacing={1}>
        <Chip
          label={`${status.posts} پست`}
          variant="outlined"
          size="small"
          sx={chipStyle}
        />
        <Chip
          label={`${status.posts} پست کننده`}
          variant="outlined"
          size="small"
          sx={chipStyle}
        />
        <Chip
          label={`${status.views} بازدید`}
          variant="outlined"
          size="small"
          sx={chipStyle}
        />
      </Stack>
    </Stack>
  );
}

export default Chips;
