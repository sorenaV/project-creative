import Card from "./_components/Card";
import Message from "./_components/Message";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function Home() {
  return (
    <Grid2
      container
      sx={{
        justifyContent: "center",
        marginTop: "2rem",
      }}
    >
      <Grid2 xs={12} md={8}>
        <Card />
      </Grid2>
      <Grid2 xs={12} md={4}>
        <Message />
      </Grid2>
    </Grid2>
  );
}
