import Container from "@mui/material/Container";
import Hero from "@/components/Hero";
import Movie from "@/components/Movie";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import type { Movie as IMovie } from "@/types";

const getMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=en-US&page=1`;

  const res = await fetch(url);

  const data: {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
  } = await res.json();
  return data;
};
export default async function Home() {
  // const peliculas = await getMovies();
  const data = await getMovies();
  console.log(data.results.length);
  console.log({ peliculas: data }, data.results[0]);
  return (
    <>
      <Hero />
      <Container component="main">
        <Typography component="h2" variant="h2" gutterBottom>
          Movies
        </Typography>
        <Grid container spacing={3}>
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
