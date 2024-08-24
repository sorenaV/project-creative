import { Box, Typography } from "@mui/material";

type AlertPropstype = {
  message: string;
  bgColor: string;
  messageColor?: string;
};

function Alert({ message, bgColor, messageColor }: AlertPropstype) {
  return (
    <Box bgcolor={bgColor} padding={2} marginTop={2} borderRadius={2}>
      <Typography color={messageColor}>{message}</Typography>
    </Box>
  );
}

export default Alert;
