import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

function NotFound() {
  return (
    <Stack
      sx={{
        gap: 2,
        width: "50%",
      }}
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: 30, fontWeight: 500 }}
      >
        This page could not be found :(
      </Typography>
      <Link href="/">
        <Typography
          variant="body1"
          component="p"
          sx={{
            backgroundColor: "#0d6efd",
            padding: 1,
            borderRadius: 2,
            color: "#fff",
          }}
        >
          Go back home
        </Typography>
      </Link>
    </Stack>
  );
}

export default NotFound;
