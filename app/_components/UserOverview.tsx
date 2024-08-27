import { Person, PersonAddAlt1Rounded } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

function UserOvervierw({ userInfo }) {
  return (
    <Stack
      direction="row"
      sx={{
        flexWrap: {
          xs: "wrap",
          lg: "nowrap",
        },
        gap: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack direction="row" spacing={1}>
        <Box
          sx={{
            width: 250,
            height: 90,
            backgroundColor: "rgb(52,58,64,0.03)",
            paddingX: 5,
            paddingY: 2,
          }}
        >
          <Typography fontSize={14} mx="auto" textAlign="center">
            Reputation
          </Typography>
          <Typography fontSize={25} mx="auto" textAlign="center">
            {userInfo.reputation}
          </Typography>
        </Box>
        <Box
          sx={{
            width: 250,
            height: 90,
            backgroundColor: "rgb(52,58,64,0.03)",
            paddingX: 5,
            paddingY: 2,
          }}
        >
          <Typography fontSize={14} mx="auto" textAlign="center">
            Profile Views
          </Typography>
          <Typography fontSize={25} mx="auto" textAlign="center">
            {userInfo.profileViews}
          </Typography>
        </Box>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Box
          sx={{
            width: 250,
            height: 90,
            backgroundColor: "rgb(52,58,64,0.03)",
            paddingX: 5,
            paddingY: 2,
          }}
        >
          <Typography fontSize={14} mx="auto" textAlign="center">
            {<PersonAddAlt1Rounded fontSize="small" />} joined
          </Typography>
          <Typography
            fontSize={16}
            mx="auto"
            textAlign="center"
            fontWeight={500}
          >
            {userInfo.joined}
          </Typography>
        </Box>
        <Box
          sx={{
            width: 250,
            height: 90,
            backgroundColor: "rgb(52,58,64,0.03)",
            paddingX: 5,
            paddingY: 2,
          }}
        >
          <Typography fontSize={14} mx="auto" textAlign="center">
            Last Online
          </Typography>
          <Typography
            fontSize={16}
            mx="auto"
            textAlign="center"
            fontWeight={500}
          >
            {userInfo.lastOnline}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}

export default UserOvervierw;
