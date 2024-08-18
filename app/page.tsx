import { Box, Grid } from "@mui/material";
import CardDetais from "./_components/CardDetais";
import Card from "./_components/Card";
import Message from "./_components/Message";

export default function Home() {
  return (
    <Grid container spacing={2} padding={3} mt={2}>
      <Grid xs={12} md={6}>
        <Card />
      </Grid>
      <Grid xs={12} md={6} mt="1rem">
        <Message />
      </Grid>
    </Grid>
  );
}
