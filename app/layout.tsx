import type { Metadata } from "next";

import Header from "./_components/Header";
import Navigation from "./_components/Navigation";
import Rtl from "./Rtl";
import { drawerCollapsedWidth } from "./_utils/constants";
import "@/app/_styles/globals.css";

import theme from "@/app/_styles/theme";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

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
    <html lang="fa" dir="rtl">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Rtl>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Container
                sx={{
                  maxWidth: {
                    xs: "100%",
                    // The width of collapsed drawer * 2 as we have 2 sidebars (left and right)
                    md: `calc(100% - ${drawerCollapsedWidth * 2}px)`,
                    lg: "80%",
                    xl: "60%",
                  },
                }}
              >
                <Header />
                <Navigation />
                <div>{children}</div>
              </Container>
            </ThemeProvider>
          </Rtl>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

// TODO:  Check how to make it rtl, enhance user profile page, make spacing better, find a solution for avatars
/*
  TODO: useState Typescript,

*/
