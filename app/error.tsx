"use client";

import { Box, Button, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        mt: 10,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: 30, fontWeight: 500, color: red[900] }}
      >
        اشتباهی پیش اومد
      </Typography>
      <Typography variant="body1" component="p">
        {error.message}
      </Typography>
      <Button onClick={reset}>امتحان دوباره</Button>
    </Box>
  );
}

export default Error;
