import UserProfileDetails from "@/app/_components/UserProfileDetails";
import UserProfile from "@/app/_components/UserProfile";
import { users } from "@/app/_config/data";

import { Alert, Box, ButtonBase } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

type ParamsType = { params: { username: string } };

export function generateMetadata({ params }: ParamsType) {
  const user = users.find((user) => user.userName === params.username);
  return { title: `User : ${user?.name}` };
}

function Page({ params }: { params: { username: string } }) {
  const username = params?.username;
  const userInfo = users.find((user) => user.userName === username);

  return (
    <Box>
      {userInfo ? (
        <>
          <UserProfile userInfo={userInfo} />
          <Grid2 container sx={{ my: 5 }} spacing={3}>
            <Grid2 xs={12} sm={3}>
              <ButtonBase
                sx={{
                  width: "100%",
                  height: 35,
                  backgroundColor: "#e3e4e5",
                  color: "inherit",
                  fontWeight: 500,
                  fontFamily: "inherit",
                  padding: 1,
                  borderRadius: 2,
                  justifyContent: "center",
                }}
              >
                درباره
              </ButtonBase>
            </Grid2>
            <Grid2 xs={12} sm={9}>
              <UserProfileDetails userInfo={userInfo} />
            </Grid2>
          </Grid2>
        </>
      ) : (
        <Alert severity="info" color="warning" sx={{ my: 2 }}>
          کاربری با نام‌کاربری {params.username} وجود ندارد
        </Alert>
      )}
    </Box>
  );
}

export default Page;
