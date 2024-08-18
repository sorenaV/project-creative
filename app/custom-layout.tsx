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
      fontFamily: fontFamily?.style.fontFamily, // Use the Inter font family or your custom font
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </div>
  );
}

export default CustomLayout;
