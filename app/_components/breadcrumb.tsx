"use client";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";

function Breadcrumb({ category, id }: { category: string; id: number }) {
  const breadcrumbs = [
    <Link className=" text" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link
      className=" text"
      key="2"
      color="text.primary"
      href={`/category/${id}`}
    >
      <Typography
        key="3"
        color="text.primary"
        sx={{
          fontSize: {
            xs: 14,
            md: 16,
          },
        }}
      >
        {category}
      </Typography>
    </Link>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          fontSize: {
            xs: 14,
            md: 16,
          },
        }}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}

export default Breadcrumb;
