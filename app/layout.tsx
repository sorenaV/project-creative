import "@/app/_styles/globals.css";
import { theme } from "@/app/custom-layout";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./_components/Header";
import Navigation from "./_components/Navigation";
import CustomLayout from "./custom-layout";
import Rtl from "./Rtl";

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
    <html lang="en" dir="rtl">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Rtl>
              <Container
                sx={{
                  //BRING THE VALUE FROM NAVIGATION
                  maxWidth: {
                    xs: "100%",
                    md: `calc(100% - ${120}px)`,
                    lg: "80%",
                    xl: "60%",
                  },
                }}
              >
                <Header />
                <Navigation />

                <CustomLayout>{children}</CustomLayout>
              </Container>
            </Rtl>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
