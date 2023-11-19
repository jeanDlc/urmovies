"use client";
import { useState } from "react";
import Head from "next/head";
import { Button, Container, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";

import useCategories from "@/hooks/useCategories";
import Movie from "@/components/Movie";

import type { ChangeEvent } from "react";
import type { Category, Movie as IMovie } from "@/types";

const Categories = () => {
  const { categories } = useCategories();

  let theme = useTheme();
  const pantallaMovil = useMediaQuery(theme.breakpoints.down("sm"));

  const [categoryIdList, setCategoryIdList] = useState<Array<Category["id"]>>(
    [],
  );

  const [movieList, setMovieList] = useState<IMovie[]>([]);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCategoryIdList([...categoryIdList, event.target.id]);
    } else {
      setCategoryIdList(categoryIdList.filter((id) => id !== event.target.id));
    }
  };

  const searchByCategory = async () => {
    if (message) {
      setMessage("");
    }

    setLoading(true);

    try {
      const params = new URLSearchParams();

      params.append("categories", categoryIdList.toString());

      const res = await fetch(`/categories/api/search?${params.toString()}`);

      const { data } = await res.json();

      if (data.length === 0) {
        setMessage("No results");
      }
      setLoading(false);

      setMovieList(data);
    } catch (error) {
      setLoading(false);
      setMessage("Error");
    }
  };
  return (
    <>
      <Head>
        <title>URmovies | Categories</title>
      </Head>
      <Container component="section">
        <Grid container spacing={3} alignItems="center">
          {!pantallaMovil ? (
            <Grid item xs={12} md={4}>
              <Box>
                <Image
                  src="/logo.png"
                  alt="Logo urmovies"
                  width={416}
                  height={480}
                />
              </Box>
            </Grid>
          ) : null}
          <Grid sx={{ width: "100%" }} item sm={12} md={8}>
            <Box maxWidth="600px" margin="0 auto">
              <Typography component="h2" variant="h2">
                Choose the Categories
              </Typography>
              <FormGroup
                sx={{
                  marginTop: 3,
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  [theme.breakpoints.up("md")]: {
                    gridTemplateColumns: "repeat(3, 1fr)",
                  },
                  marginBottom: 2.5,
                }}
              >
                {categories.map((cat) => (
                  <FormControlLabel
                    key={cat.id}
                    control={
                      <Checkbox
                        onChange={handleChange}
                        name={cat.name}
                        id={`${cat.id}`}
                      />
                    }
                    label={cat.name}
                  />
                ))}
              </FormGroup>
              <Button
                onClick={searchByCategory}
                color="secondary"
                fullWidth={true}
                size="large"
                variant="contained"
              >
                Search by category
              </Button>
            </Box>
          </Grid>
        </Grid>
        {loading && (
          <Box textAlign="center" marginTop={20}>
            <CircularProgress color="secondary" />
          </Box>
        )}

        {message && (
          <Box textAlign="center" marginTop={15}>
            <Typography component="p" variant="h3" gutterBottom>
              {message}
            </Typography>
          </Box>
        )}

        <Box component="main" marginTop={20}>
          <Grid container spacing={3}>
            {movieList.map((pelicula) => (
              <Grid xs={12} md={6} lg={4} item key={pelicula.id}>
                <Movie movie={pelicula} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Categories;
