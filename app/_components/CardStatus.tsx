import { Box, Typography } from "@mui/material";

type CardStatusType = {
  cardIcon: React.ReactNode;
  cardLabel: string;
  cardNum: string | number;
};

function CardStatus({ cardNum, cardLabel, cardIcon }: CardStatusType) {
  return (
    <Box
      sx={{
        height: "auto",
        display: {
          xs: "none",
          md: "flex",
        },
        alignItems: "center",
      }}
    >
      <CardStatusContent
        cardNum={cardNum}
        cardLabel={cardLabel}
        cardIcon={cardIcon}
      />
    </Box>
  );
}
export default CardStatus;

function CardStatusContent({ cardNum, cardLabel, cardIcon }: CardStatusType) {
  const styles = {
    backgroundColor: "#f9f9f9",
    padding: "1.5rem",
    py: ".5rem",
    height: "4rem",
    width: "7rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 2,
  };
  const numStyles = {
    fontSize: "1.2rem",
    textAlign: "center",
  };
  const titleStyles = {
    fontSize: "0.8rem",
    textAlign: "center",
    opacity: 0.6,
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
      {/* Shows either label (larger screen) or icon (smaller screen) */}
      <Typography sx={{ ...titleStyles, ...titleResponsiveMd }}>
        {cardIcon}
      </Typography>
      <Typography sx={{ ...titleStyles, ...titleResponsiveLg }}>
        {cardLabel}
      </Typography>
    </Box>
  );
}
