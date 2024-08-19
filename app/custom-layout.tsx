"use client";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
type Props = {
  children: React.ReactNode;
  fontFamily: any;
};
function CustomLayout({ children, fontFamily }: Props) {
  const [counter, setCounter] = useState(0);

  const theme = createTheme({
    typography: {
      fontFamily: [
        `${fontFamily?.style.fontFamily}`,
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default CustomLayout;
