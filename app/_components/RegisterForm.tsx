"use client";

import {
  ButtonBase,
  Divider,
  FormControl,
  FormHelperText,
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

function RegisterForm() {
  return (
    <form>
      <Typography sx={{ mt: 2 }}>Username</Typography>
      <StyledInput placeholder="Enter Username" />

      <FormHelperText id="my-helper-text">
        A unique username between 2 and 16 characters. Others can mention you
        with @username.
      </FormHelperText>

      <Typography sx={{ mt: 2 }}>Password</Typography>
      <StyledInput placeholder="Enter Password" />

      <FormHelperText id="my-helper-text">
        Your password&rsquo;s length must be at least 6 characters.
      </FormHelperText>

      <Typography sx={{ mt: 2 }}>Confirm Password</Typography>
      <StyledInput placeholder="Confirm Password" />

      <Button sx={{ my: 5 }}>Login</Button>
      <Divider variant="fullWidth" />
    </form>
  );
}

export default RegisterForm;
