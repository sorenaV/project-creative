"use client";

import {
  ButtonBase,
  Divider,
  FormControl,
  FormHelperText,
  Input,
  InputBase,
  InputLabel,
  styled,
  Typography,
} from "@mui/material";
import Link from "next/link";

const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: 5,
  width: "100%",

  "& input": {
    borderRadius: 4,
    backgroundColor: "#fff",
    padding: 10,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    border: `2px solid #eaecef`,
    fontSize: 16,
    "&:focus": {
      boxShadow: "0px 0px 0px 3px rgba(3, 102, 214, 0.3)",
      borderColor: "#0366d6",
    },
  },
}));

const Button = styled(ButtonBase)(({ theme }) => ({
  width: "100%",
  fontSize: 15,
  padding: 10,
  backgroundColor: "#0d6efd",
  border: "1px solid #0d6efd",
  color: "#fff",
  borderRadius: 5,
  fontWeight: 500,
  "&:hover,&:focus": {
    backgroundColor: "#0b5ed7",
  },
}));

function LoginForm() {
  return (
    <FormControl component="form" sx={{ width: "100%" }}>
      <Typography sx={{ mt: 2 }}>Username / Email</Typography>
      <StyledInput placeholder="Username / Email" />
      <Typography sx={{ mt: 2 }}>Password</Typography>
      <StyledInput placeholder="Password" />
      <Link href="/">
        <Typography sx={{ textDecoration: "underline", fontSize: 14 }}>
          Forget Password?
        </Typography>
      </Link>
      <Button sx={{ my: 5 }}>Login</Button>
      <Divider variant="fullWidth" />
    </FormControl>
  );
}

export default LoginForm;
