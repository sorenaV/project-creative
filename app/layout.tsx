import { AppBar, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Inter } from "next/font/google";
import { theme } from "@/app/custom-layout";
import type { Metadata } from "next";

import Header from "./_components/Header";
import CustomLayout from "./custom-layout";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container
            sx={{
              //BRING THE VALUR FROM NAVIGATION
              maxWidth: "calc(100% - 120px)",
            }}
          >
            <Navigation />
            <Header />
            <CustomLayout>{children}</CustomLayout>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
