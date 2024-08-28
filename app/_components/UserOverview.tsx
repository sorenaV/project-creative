import { PersonAddAlt1Rounded } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import { UsersType } from "../_types";

function UserOverview({ userInfo }: { userInfo: UsersType | undefined }) {
  if (!userInfo) return;
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
      <OverviewBox fieldName="Reputation" fieldNumber={userInfo.reputation} />
      <OverviewBox
        fieldName="Profile Views"
        fieldNumber={userInfo.profileViews}
      />

      <OverviewBox
        fieldName="joined"
        fieldNumber={userInfo.joined}
        fieldIcon={<PersonAddAlt1Rounded fontSize="small" />}
      />
      <OverviewBox fieldName="Last Online" fieldNumber={userInfo.lastOnline} />
    </Stack>
  );
}

function OverviewBox({
  fieldName,
  fieldNumber,
  fieldIcon,
}: {
  fieldName: string;
  fieldNumber: string | number;
  fieldIcon?: ReactNode;
}) {
  return (
    <Box
      sx={{
        width: 200,
        height: 90,
        backgroundColor: "rgb(52,58,64,0.03)",
        paddingX: 5,
        paddingY: 2,
      }}
    >
      <Typography fontSize={14} mx="auto" textAlign="center">
        {fieldIcon ? fieldIcon : null}
        {fieldName}
      </Typography>
      <Typography fontSize={16} mx="auto" textAlign="center" fontWeight={500}>
        {fieldNumber}
      </Typography>
    </Box>
  );
}

export default UserOverview;
