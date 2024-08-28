import Link from "next/link";

import { Typography } from "@mui/material";

function Logo() {
  return (
    <Link href="/" passHref>
      <Typography
        variant="body1"
        sx={{
          textDecoration: "none",
          "&:hover": { textDecoration: "underline" },
          width: "13%",
          transition: "background-color 0.2s ease",
          borderRadius: 2,
        }}
        fontWeight={600}
        fontSize={16}
        color="#000"
        py={1.5}
        px={2}
      >
        NodeBB
      </Typography>
    </Link>
  );
}

export default Logo;
