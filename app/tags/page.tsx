import { Metadata } from "next";
import { getTag } from "../_helper/getTag";

import { Alert, Divider, Typography } from "@mui/material";

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
        تگ ها
      </Typography>
      <Divider sx={{ mt: 2 }} />
      {!tags.length && (
        <Alert severity="info" sx={{ my: 2 }}>
          هنوز تگی وجود ندارد.
        </Alert>
      )}
    </>
  );
}

export default Page;
