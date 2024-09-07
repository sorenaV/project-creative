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

function RegisterForm() {
  return (
    <form>
      <Typography sx={{ mt: 2 }}>نام کاربری</Typography>
      <StyledInput placeholder="نام کاربری خود را وارد کنید" />

      <FormHelperText id="my-helper-text">
        یک نام کاربری منحصر به فرد بین 2 تا 16 کاراکتر. دیگران می توانند از شما
        نام ببرند با @username.
      </FormHelperText>

      <Typography sx={{ mt: 2 }}>گذرواژه</Typography>
      <StyledInput placeholder="گذرواژه خود را وارد کنید" />

      <FormHelperText id="my-helper-text">
        طول رمز عبور شما باید حداقل 6 کاراکتر باشد.
      </FormHelperText>

      <Typography sx={{ mt: 2 }}>تکرار گذرواژه</Typography>
      <StyledInput placeholder="تکرار گذرواژه" />

      <Button sx={{ my: 5 }}>ورود</Button>
      <Divider variant="fullWidth" />
    </form>
  );
}

export default RegisterForm;
