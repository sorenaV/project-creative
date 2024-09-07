import Image from "next/image";
import Link from "next/link";

import notFound from "@/public/notFound.svg";

import { Box, Button, Stack, Typography } from "@mui/material";

function NotFound() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{
        height: "90vh",
      }}
      justifyContent="center"
      alignItems="center"
      textAlign={{
        xs: "center",
        md: "left",
      }}
      spacing={5}
    >
      <div>
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontSize: 30, fontWeight: 500 }}
        >
          یـــه خبــر بـــد!! 404
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          sx={{ fontSize: 16, fontWeight: 400, opacity: 0.8, my: 1 }}
        >
          نتونستیم صفحه ای که دنبالشی رو پیدا کنیم :(
        </Typography>
        <Link href="/">
          <Button
            variant="contained"
            component="p"
            sx={{
              backgroundColor: "#0d6efd",
              padding: 1,
              borderRadius: 2,
              color: "#fff",
              width: "50%",
            }}
          >
            برگشت
          </Button>
        </Link>
      </div>
      <Box
        sx={{
          position: "relative",
          width: { xs: 300, md: 500 },
          height: { xs: 300, md: 500 },
        }}
      >
        <Image alt="not found image" src={notFound} fill />
      </Box>
    </Stack>
  );
}

export default NotFound;
