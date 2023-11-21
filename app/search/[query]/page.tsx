import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import SearchInput from "@/components/SearchInput";
import { Suspense } from "react";
import MovieListSkeleton from "@/components/MovieListSkeleton";
import Movie from "@/components/Movie";
import { searchMovie } from "@/services";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URmovies | Search",
};

export default async function Search({
  params,
}: {
  params: { query: string };
}) {
  const query = decodeURIComponent(params.query);

  return (
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

      <Suspense fallback={<MovieListSkeleton nItems={6} />}>
        <SearchResults query={query} />
      </Suspense>
    </Container>
  );
}

const SearchResults = async ({ query }: { query: string }) => {
  const results = await searchMovie({ query });
  if (!results.length)
    return (
      <Typography component="p" gutterBottom>
        No results found for {query}
      </Typography>
    );
  return (
    <Grid style={{ marginTop: 10 }} container spacing={3}>
      {results.map((res) => (
        <Grid key={res.id} item xs={12} md={6} xl={4}>
          <Movie movie={res} />
        </Grid>
      ))}
    </Grid>
  );
};
