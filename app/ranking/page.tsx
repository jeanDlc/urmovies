import Head from "next/head";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Movie from "@/components/Movie";
import { getRankedMovies } from "@/services";

const Ranking = async () => {
  const movies = await getRankedMovies();

  return (
    <>
      <Head>
        <title>URmovies | Ranking</title>
      </Head>
      <Container component="main">
        <Typography component="h2" variant="h3" gutterBottom>
          Ranking
        </Typography>
        <Grid container spacing={3}>
          {movies.map((movie) => (
            <Grid key={movie.id} item xs={12} sm={6} lg={4}>
              <Movie movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Ranking;
