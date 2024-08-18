import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  GlobalStyles,
} from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./_components/Header";
import "@/app/_styles/globals.css";
import CustomLayout from "./custom-layout";

const inter = Inter({ subsets: ["latin"], display: "swap" });

console.log(inter);

export const metadata: Metadata = {
  title: {
    template: "%s | NodeBB",
    default: "Home | NodeBB",
  },
  description: "A lovely site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <CustomLayout fontFamily={inter}>{children}</CustomLayout>
      </body>
    </html>
  );
}
