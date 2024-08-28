import { Box, Stack, Typography } from "@mui/material";

type CardStatusType = {
  cardIcon: JSX.Element;
  cardLabel: string;
  cardNum: string | number;
};

function CardStatus({ cardNum, cardLabel, cardIcon }: CardStatusType) {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        width: "2rem",
        justifyContent: "end",
        alignSelf: "center",
        height: "auto",
        display: {
          xs: "none",
          md: "flex",
        },
      }}
    >
      <div>
        <CardStatusContent
          cardNum={cardNum}
          cardLabel={cardLabel}
          cardIcon={cardIcon}
        />
      </div>
    </Stack>
  );
}
export default CardStatus;

function CardStatusContent({ cardNum, cardLabel, cardIcon }: CardStatusType) {
  const styles = {
    backgroundColor: "#f9f9f9",
    padding: "1.5rem",
    py: ".5rem",
    height: "4rem",
    width: "4rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    <Box sx={styles}>
      <Typography sx={numStyles}>{cardNum}</Typography>
      {/* Show either label (larger screen) or icon (smaller screen) */}
      <Typography sx={{ ...titleStyles, ...titleResponsiveMd }}>
        {cardIcon}
      </Typography>
      <Typography sx={{ ...titleStyles, ...titleResponsiveLg }}>
        {cardLabel}
      </Typography>
    </Box>
  );
}
