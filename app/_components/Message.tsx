import { Box, Typography } from "@mui/material";

function Message() {
  return (
    <Box
      bgcolor="#cff4fc"
      padding={1}
      margin={1}
      width="inherit"
      sx={{
        border: 1,
        borderRadius: 2,

        borderColor: "primary.main",
        padding: "2rem 1rem",
      }}
    >
      <Typography
        variant="h6"
        fontSize={18}
        sx={{ marginBottom: 2 }}
        fontWeight={600}
      >
        Welcome to the NodeBB demo instance!
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 2 }} fontSize={16}>
        This website is a demo instance of NodeBB that you can use to try out
        our forum software. It is a default install with minimal configuration
        changes.
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 2 }} fontSize={16}>
        For more information on this site, please check out this post.
      </Typography>

      <Typography variant="body1" fontSize={16}>
        This information is displayed via the Widgets system, available under
        the Extend menu in the admin control panel.
      </Typography>
    </Box>
  );
}

export default Message;
