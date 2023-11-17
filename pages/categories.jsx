import React, { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import useCategorias from "../hooks/useCategorias";
import Movie from "../components/Movie";
import CircularProgress from "@mui/material/CircularProgress";
import Head from "next/head";
const useStyles = makeStyles((theme) => ({
  formGroup: {
    marginTop: 22,
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    marginBottom: 20,
  },
}));

const Categories = () => {
  //trae toda las categorias de peliculas
  const listaCategorias = useCategorias();

  let theme = useTheme();
  const pantallaMovil = useMediaQuery(theme.breakpoints.down("sm"));

  const classes = useStyles();

  const [listaIdCategorias, setListaIdCategorias] = useState([]);
  const [listaPeliculas, setListaPeliculas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const handleChange = (event) => {
    if (event.target.checked) {
      //si se hace check, se agregará a la lista de ids
      setListaIdCategorias([...listaIdCategorias, event.target.id]);
    } else {
      //sino , se eliminará de la lista
      setListaIdCategorias(
        listaIdCategorias.filter((id) => id !== event.target.id),
      );
    }
  };

  const buscarPorCategoria = async () => {
    if (mensaje !== "") {
      setMensaje("");
    }
    setLoading(true);

    try {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${
        process.env.NEXT_PUBLIC_TMDB_API
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${listaIdCategorias.toString()}`;
      const res = await fetch(url);
      const busqueda = await res.json();
      if (busqueda.results.length === 0) {
        setMensaje("No results");
      }
      setLoading(false);
      setListaPeliculas(busqueda.results);
    } catch (error) {
      setLoading(false);
      setMensaje("Error");
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
          <Grid style={{ width: "100%" }} item sm={12} md={8}>
            <Box maxWidth="600px" margin="0 auto">
              <Typography component="h2" variant="h2">
                Choose the Categories
              </Typography>
              <FormGroup className={classes.formGroup}>
                {listaCategorias.map((cat) => (
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
                onClick={buscarPorCategoria}
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
        {mensaje !== "" && (
          <Box textAlign="center" marginTop={15}>
            <Typography component="p" variant="h3" gutterBottom>
              {mensaje}{" "}
            </Typography>
          </Box>
        )}
        <Box component="main" marginTop={20}>
          <Grid container spacing={3}>
            {listaPeliculas.map((pelicula) => (
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
