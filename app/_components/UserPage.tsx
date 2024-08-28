import Image from "next/image";
import type { UsersType } from "../_types";

import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";

type UserPagePropsType = {
  userInfo: UsersType | undefined;
};

function UserPage({ userInfo }: UserPagePropsType) {
  if (!userInfo) return;
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 200,
          overflow: "hidden",
        }}
      >
        <Image
          src="/bannerImage.png"
          alt="Profile Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </Box>

      <Stack
        direction={{
          xs: "column",
          sm: "row",
        }}
        spacing={2}
        sx={{
          alignItems: "center",
          mt: -8,
          ml: 3,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Avatar
          src={userInfo.avatar}
          alt={userInfo.name}
          sx={{
            width: 120,
            height: 120,
            fontSize: 40,
            border: "4px solid white",
            backgroundColor: orange[900],
          }}
        />
        <Stack>
          <Typography
            sx={{ fontSize: 28, fontWeight: 700, mt: { xs: 0, sm: 8 } }}
          >
            {userInfo.name}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            @{userInfo.userName}
          </Typography>
        </Stack>
      </Stack>

      <Divider sx={{ mt: 3 }} />
    </Box>
  );
}

export default UserPage;
