"use client";
import { createTheme } from "@mui/material";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "../_font/Kalameh-Thin.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../_font/Kalameh-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../_font/Kalameh-Bold.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../_font/Kalameh-Black.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: [
      `${myFont.style.fontFamily}`,
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
export default theme;
