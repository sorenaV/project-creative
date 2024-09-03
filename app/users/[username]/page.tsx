import UserOverview from "@/app/_components/UserOverview";
import UserPage from "@/app/_components/UserPage";
import { users } from "@/app/_config/data";

import Grid2 from "@mui/material/Unstable_Grid2";
import { Alert, Box, Button, ButtonBase } from "@mui/material";

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
          <UserPage userInfo={userInfo} />
          <Grid2 container sx={{ mt: 5 }} spacing={3}>
            <Grid2 xs={12} sm={3}>
              <ButtonBase
                sx={{
                  width: "90%",
                  height: 35,
                  backgroundColor: "#e3e4e5",
                  color: "inherit",
                  fontWeight: 500,
                  padding: 1,
                  borderRadius: 2,
                  justifyContent: "center",
                }}
              >
                درباره
              </ButtonBase>
            </Grid2>
            <Grid2 xs={12} sm={9}>
              <UserOverview userInfo={userInfo} />
            </Grid2>
          </Grid2>{" "}
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
