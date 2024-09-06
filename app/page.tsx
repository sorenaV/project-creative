import CategoryList from "./_components/CategoryList";
import HeroMessage from "./_components/HeroMessage";
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
        <CategoryList />
      </Grid2>
      <Grid2 xs={12} md={4}>
        <HeroMessage />
      </Grid2>
    </Grid2>
  );
}
