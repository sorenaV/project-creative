"use client";
import Link from "next/link";

import {
  ButtonBase,
  Divider,
  FormControl,
  InputBase,
  styled,
  Typography,
} from "@mui/material";

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
  fontFamily: "inherit",
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
    <form>
      <Typography sx={{ mt: 2 }}>نام کاربری / ایمیل</Typography>
      <StyledInput placeholder="نام کاربری / ایمیل" />
      <Typography sx={{ mt: 2 }}>گذرواژه</Typography>
      <StyledInput placeholder="گذرواژه" />
      <Link href="/">
        <Typography sx={{ textDecoration: "underline", fontSize: 14 }}>
          گذرواژه را فراموش کردید؟
        </Typography>
      </Link>
      <Button sx={{ my: 5 }}>ورود</Button>
      <Divider variant="fullWidth" />
    </form>
  );
}

export default LoginForm;
