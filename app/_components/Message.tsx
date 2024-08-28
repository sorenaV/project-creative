import { Box, Typography } from "@mui/material";

function Message() {
  return (
    <Box
      bgcolor="#cff4fc"
      sx={{
        border: 1,
        borderRadius: 2,
        borderColor: "primary.main",
        p: 2,
        mt: { xs: 2, lg: 0 },
        ml: { md: 2 },
        height: "100%",
      }}
    >
      <Typography
        variant="h6"
        component="h6"
        fontSize={{
          xs: 16,
          md: 18,
        }}
        sx={{ marginBottom: 2 }}
        fontWeight={600}
      >
        Welcome to the NodeBB demo instance!
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{ marginBottom: 2 }}
        fontSize={{
          xs: 14,
          md: 16,
        }}
      >
        This website is a demo instance of NodeBB that you can use to try out
        our forum software. It is a default install with minimal configuration
        changes.
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{ marginBottom: 2 }}
        fontSize={{
          xs: 14,
          md: 16,
        }}
      >
        For more information on this site, please check out this post.
      </Typography>

      <Typography
        variant="body1"
        component="p"
        fontSize={{
          xs: 14,
          md: 16,
        }}
      >
        This information is displayed via the Widgets system, available under
        the Extend menu in the admin control panel.
      </Typography>
    </Box>
  );
}

export default Message;
