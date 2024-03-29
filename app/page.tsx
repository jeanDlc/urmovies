import Container from "@mui/material/Container";
import Movie from "@/components/Movie";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { getPopularMovies } from "@/services";
import SearchInput from "@/components/SearchInput";
import { Suspense } from "react";
import MovieListSkeleton from "@/components/MovieListSkeleton";

export default async function Home() {
  return (
    <Container component="main">
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} md={8}>
          <Typography component="h2" variant="h2">
            Popular movies
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <SearchInput />
        </Grid>
      </Grid>

      <Suspense fallback={<MovieListSkeleton nItems={3} />}>
        <MovieList />
      </Suspense>
    </Container>
  );
}

const MovieList = async () => {
  const data = await getPopularMovies();
  return (
    <Grid container spacing={2} alignItems={"stretch"}>
      {data.results.map((movie) => (
        <Grid key={movie.id} item xs={12} sm={6} lg={4}>
          <Movie movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};
