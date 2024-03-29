import Container from "@mui/material/Container";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Company from "@/components/Company";
import { getMovieById, getPopularMovies } from "@/services";
import { MONTH } from "@/constants";
import DesktopMovieImage from "./DesktopMovieImage";
import buildImageUrl from "@/helpers/buildImageUrl";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URmovies | Page",
};

export async function generateStaticParams() {
  const { results: movies } = await getPopularMovies();

  return movies.map(({ id }) => ({ id: String(id) }));
}

export const revalidate = MONTH;

const Movie = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const movie = await getMovieById(id);

  const {
    backdrop_path,
    title,
    tagline,
    overview,
    poster_path,
    release_date,
    original_language,
    genres,
    production_companies,
    status,
    spoken_languages,
    vote_count,
  } = movie;

  const imageUrl = buildImageUrl({ path: backdrop_path });

  const posterImageUrl = buildImageUrl({ path: poster_path });

  return (
    <>
      <Image
        src={imageUrl}
        alt="Logo movie"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ opacity: 0.1 }}
        draggable={false}
        priority
      />
      <Box sx={{ mt: { md: 4 }, minHeight: "90vh", mb: 1 }}>
        <Container>
          <Grid container spacing={3}>
            <DesktopMovieImage imageUrl={posterImageUrl} />
            <Grid item xs={12} md={8}>
              <Box
                component="main"
                overflow="auto"
                position="relative"
                zIndex={3}
              >
                <Typography component="h2" variant="h3" gutterBottom>
                  {title}
                </Typography>
                <Typography gutterBottom>{tagline}</Typography>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <Typography sx={{ mb: 4 }}>
                    {`${new Date(release_date).getFullYear()} | ${genres
                      .map((g) => g.name)
                      .join(", ")} | ${status}`}
                  </Typography>
                </Box>
                <Typography component="h3" variant={"h5"} gutterBottom>
                  Overview
                </Typography>
                <Typography sx={{ mb: 2 }}>{overview}</Typography>
                <Box display="flex" gap={2} my={1} alignItems={"center"}>
                  <Typography>Original language</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {original_language}
                  </Typography>
                </Box>
                <Box display="flex" gap={2} my={1} alignItems={"center"}>
                  <Typography>Spoken languages</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {spoken_languages.map(({ name }) => name).join(", ")}
                  </Typography>
                </Box>
                <Box display="flex" gap={2} my={1} alignItems={"center"}>
                  <Typography>Votes count</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {vote_count}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {production_companies?.length > 0 && (
        <Container component="section">
          <Typography component="h3" variant="h5" gutterBottom>
            Companies
          </Typography>
          <Grid container spacing={3} style={{ marginBottom: "30px" }}>
            {production_companies.map((prodCompany) => (
              <Grid key={prodCompany.id} item xs={12} md={6} lg={4}>
                <Company details={prodCompany} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Movie;
