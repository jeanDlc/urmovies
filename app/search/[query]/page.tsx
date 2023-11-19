import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Movie from "@/components/Movie";
import SearchInput from "@/components/SearchInput";
import Head from "next/head";

import { Api } from "@/services/buildRequestUrl";

import type { Movie as IMovie } from "@/types";

const Search = async ({ params }: { params: { query: string } }) => {
  const query = decodeURIComponent(params.query);

  const url = Api.buildRequestUrl({
    path: "/search/movie",
    params: { query, include_adult: "false" },
  });

  const res = await fetch(url);

  const data = await res.json();

  const results: IMovie[] = data.results;

  return (
    <>
      <Head>
        <title>URmovies | Search </title>
      </Head>
      <Container component="main">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Typography
              style={{ textTransform: "capitalize" }}
              component="h2"
              variant="h3"
              gutterBottom
            >
              {query}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <SearchInput />
          </Grid>
        </Grid>

        {results.length > 0 ? (
          <Grid style={{ marginTop: 10 }} container spacing={3}>
            {results.map((res) => (
              <Grid key={res.id} item xs={12} md={6} xl={4}>
                <Movie movie={res} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography component="p" gutterBottom>
            No results found for {query}
          </Typography>
        )}
      </Container>
    </>
  );
};

export default Search;
