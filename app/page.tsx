import { Box, Grid } from "@mui/material";
import Card from "./_components/Card";
import Message from "./_components/Message";

export default function Home() {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        marginTop: "2rem",
      }}
    >
      <Grid xs={12} md={8}>
        <Card />
      </Grid>
      <Grid xs={12} md={4}>
        <Message />
      </Grid>
    </Grid>
  );
}
