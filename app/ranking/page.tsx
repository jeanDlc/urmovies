import { Suspense } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Movie from "@/components/Movie";
import { getRankedMovies } from "@/services";
import MovieListSkeleton from "@/components/MovieListSkeleton";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URmovies | Ranking",
};

export default async function Ranking() {
  return (
    <Container component="main">
      <Typography component="h2" variant="h3" gutterBottom>
        Ranking
      </Typography>
      <Suspense fallback={<MovieListSkeleton nItems={3} />}>
        <RankingMovieList />
      </Suspense>
    </Container>
  );
}

const RankingMovieList = async () => {
  const movies = await getRankedMovies();
  return (
    <Grid container spacing={3}>
      {movies.map((movie) => (
        <Grid key={movie.id} item xs={12} sm={6} lg={4}>
          <Movie movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};
