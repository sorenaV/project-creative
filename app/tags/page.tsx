import { Metadata } from "next";
import Alert from "../_components/Alert";
import { Divider, Typography } from "@mui/material";
import { getTag } from "../_helper/getTag";

export const metadata: Metadata = {
  title: "Tags",
};

function Page() {
  const tags = getTag();
  return (
    <>
      <Typography
        component="h1"
        variant="h1"
        sx={{ fontSize: 25, mt: 5, fontWeight: 500 }}
      >
        Tags
      </Typography>
      <Divider sx={{ mt: 2 }} />
      {!tags.length && (
        <Alert
          bgColor="#fff3cd"
          messageColor="#664d03"
          message="There are no tags yet."
        />
      )}
    </>
  );
}

export default Page;
