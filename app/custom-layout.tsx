"use client";

import { Box, createTheme } from "@mui/material";
import { Inter } from "next/font/google";

type Props = {
  children: React.ReactNode;
};
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const theme = createTheme({
  typography: {
    fontFamily: [
      `${inter.style.fontFamily}`,
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

function CustomLayout({ children }: Props) {
  return <>{children}</>;
}

export default CustomLayout;
