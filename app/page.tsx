import Container from "@mui/material/Container";
import Hero from "@/components/Hero";
import Movie from "@/components/Movie";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { getPopularMovies } from "@/services";

export default async function Home() {
  const data = await getPopularMovies();

  return (
    <>
      <Hero />
      <Container component="main">
        <Typography component="h2" variant="h2" gutterBottom>
          Movies
        </Typography>
        <Grid container spacing={2} alignItems={"stretch"}>
          {data.results.map((movie) => (
            <Grid key={movie.id} item xs={12} sm={6} lg={4}>
              <Movie movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
