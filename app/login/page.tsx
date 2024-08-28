import LoginForm from "../_components/LoginForm";

import { Box, Typography } from "@mui/material";

function Page() {
  return (
    <Box
      sx={{
        my: 5,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: {
          xs: "100%",
          sm: "75%",
          md: "50%",
        },
      }}
    >
      <Typography
        sx={{ fontSize: { xs: 25, md: 28, lg: 32 }, fontWeight: 600 }}
      >
        Login
      </Typography>
      <LoginForm />
    </Box>
  );
}

export default Page;
