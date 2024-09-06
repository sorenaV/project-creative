import { PersonAddAlt1Rounded } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import type { UsersType } from "../_types";

function UserProfileDetails({ userInfo }: { userInfo: UsersType | undefined }) {
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
      <OverviewBox fieldName="شهرت" fieldNumber={userInfo.reputation} />
      <OverviewBox
        fieldName="بازدید پروفایل"
        fieldNumber={userInfo.profileViews}
      />

      <OverviewBox
        fieldName="عضو شده"
        fieldNumber={userInfo.joined}
        fieldIcon={<PersonAddAlt1Rounded fontSize="small" />}
      />
      <OverviewBox fieldName="آخرین بازدید" fieldNumber={userInfo.lastOnline} />
    </Stack>
  );
}
export default UserProfileDetails;

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
