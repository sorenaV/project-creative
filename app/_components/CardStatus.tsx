import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
type Props = {
  cartTopic: string;
  cardPost: string;
};

function CardStatus({ cartTopic, cardPost }: Props) {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        width: "2rem",
        justifyContent: "end",
        alignSelf: "center",
        alignContent: "center",
        height: "auto",
        display: {
          xs: "none",
          md: "flex",
        },
      }}
    >
      <TypoComponent cartTopic={cartTopic} cardPost={cardPost} />
    </Stack>
  );
}

function TypoComponent({ cartTopic, cardPost }: Props) {
  const styles = {
    backgroundColor: "#f9f9f9",
    padding: "1.5rem",
    py: ".5rem",
    height: "4rem",
    display: "flex",
    flexDirection: "column",
  };
  const numStyles = {
    fontSize: "1.2rem",
    textAlign: "center",
  };
  const titleStyles = {
    fontSize: "0.9rem",
    textAlign: "center",
  };

  const titleResponsiveMd = {
    display: {
      xs: "none",
      md: "block",
      lg: "none",
    },
  };
  const titleResponsiveLg = {
    display: {
      xs: "none",
      lg: "block",
    },
  };

  return (
    <>
      <Box sx={styles}>
        <Typography sx={numStyles}>{cartTopic}</Typography>
        <Typography sx={{ ...titleStyles, ...titleResponsiveMd }}>
          <FormatListBulletedRoundedIcon fontSize="small" color="action" />
        </Typography>
        <Typography sx={{ ...titleStyles, ...titleResponsiveLg }}>
          Topics
        </Typography>
      </Box>

      <Box sx={styles}>
        <Typography sx={numStyles}>{cardPost}</Typography>
        <Typography sx={{ ...titleStyles, ...titleResponsiveMd }}>
          <ChatBubbleRoundedIcon fontSize="small" color="action" />
        </Typography>
        <Typography sx={{ ...titleStyles, ...titleResponsiveLg }}>
          Posts
        </Typography>
      </Box>
    </>
  );
}
export default CardStatus;
