import { Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";

function Logo(): JSX.Element {
  return (
    <Link href="/" passHref>
      <Typography
        variant="body1"
        sx={{ textDecoration: "none" }}
        fontWeight={600}
        fontSize={16}
        color="#000"
        py={1.5}
      >
        NodeBB
      </Typography>
    </Link>
  );
}

export default Logo;
