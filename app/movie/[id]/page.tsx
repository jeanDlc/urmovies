import Container from "@mui/material/Container";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Score from "@/components/Score";
import LanguageIcon from "@mui/icons-material/Language";
import Company from "@/components/Company";
import Head from "next/head";
import { Api } from "@/services/buildRequestUrl";
import DesktopMovieImage from "./DesktopMovieImage";

import type { Movie as IMovie } from "@/types";

const Movie = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const url = Api.buildRequestUrl({
    path: `/movie/${id}`,
  });

  const res = await fetch(url);

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error(`Couldn't find a movie with ID ${id}`);
    }

    throw new Error("Unexpected error");
  }
  const movie: IMovie = await res.json();

  const {
    backdrop_path,
    title,
    vote_average,
    tagline,
    overview,
    poster_path,
    release_date,
    original_language,
    genres,
    production_companies,
  } = movie;

  const imageUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  const posterImageUrl = `https://image.tmdb.org/t/p/original/${poster_path}`;

  return (
    <>
      <Head>
        <title>URmovies | Movie</title>
      </Head>
      <Image
        src={imageUrl}
        alt="Logo movie"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ opacity: 0.3 }}
        draggable={false}
      />
      <Box height="90vh" marginTop={4}>
        <Container>
          <Grid container spacing={3}>
            <DesktopMovieImage imageUrl={posterImageUrl} />
            <Grid item xs={12} md={8}>
              <Box
                component="main"
                overflow="auto"
                maxHeight="80vh"
                position="relative"
                zIndex={3}
              >
                <Typography component="h2" variant="h3" sx={{ mb: 2 }}>
                  {title}
                </Typography>
                <Typography gutterBottom>{tagline}</Typography>
                {release_date !== "" ? (
                  <Typography gutterBottom>
                    {new Date(release_date).getFullYear()}
                  </Typography>
                ) : null}
                <Score score={vote_average} />
                <Typography component="p" variant={"h6"} gutterBottom>
                  {overview}
                </Typography>
                <Box display="flex" gap={1}>
                  <LanguageIcon />
                  <Typography>
                    Original Language: {original_language}
                  </Typography>
                </Box>
                <Box component="ul" display="flex" flexWrap="wrap">
                  {genres?.map((genre) => (
                    <li
                      style={{
                        display: "inline-block",
                        marginRight: "15px",
                        textDecoration: "none",
                        listStyle: "none",
                      }}
                      key={genre.id}
                    >
                      {genre.name}
                    </li>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {production_companies?.length > 0 && (
        <Container component="section">
          <Typography component="h3" variant="h5" gutterBottom>
            Companies:
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
