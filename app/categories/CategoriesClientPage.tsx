"use client";
import { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

import useCategories from "@/hooks/useCategories";
import Movie from "@/components/Movie";

import type { ChangeEvent } from "react";
import type { Category, Movie as IMovie } from "@/types";

const CategoriesClientPage = () => {
  const { categories } = useCategories();

  let theme = useTheme();

  const [categoryIdList, setCategoryIdList] = useState(
    new Set<Category["id"]>(),
  );

  const [movieList, setMovieList] = useState<IMovie[]>([]);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const categoryIdListCopy = new Set(categoryIdList);

    const id = Number(event.target.id);

    if (!categoryIdListCopy.has(id)) {
      categoryIdListCopy.add(id);
    } else {
      categoryIdListCopy.delete(id);
    }

    setCategoryIdList(categoryIdListCopy);
  };

  const searchByCategory = async () => {
    if (message) {
      setMessage("");
    }

    setLoading(true);

    try {
      const params = new URLSearchParams();

      params.append("categories", Array.from(categoryIdList).toString());

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

  const sortedCategories = [...categories].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <Container component="section">
      <Box margin="0 auto">
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <Typography component="h2" variant="h4">
              Categories
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box display={"flex"} gap={1} alignItems={"center"}>
              <Button
                onClick={searchByCategory}
                fullWidth={true}
                size="large"
                variant="contained"
                endIcon={<SearchIcon />}
              >
                Search
              </Button>
              <Button
                onClick={() => {
                  setCategoryIdList(new Set());
                }}
                color="secondary"
                fullWidth={true}
                size="large"
                variant="contained"
                endIcon={<ClearIcon />}
              >
                Reset
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid xs={12}>
            <FormGroup
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                [theme.breakpoints.up("md")]: {
                  gridTemplateColumns: "repeat(4, 1fr)",
                },
              }}
            >
              {sortedCategories.map((cat) => (
                <FormControlLabel
                  key={cat.id}
                  control={
                    <Checkbox
                      onChange={handleChange}
                      name={cat.name}
                      id={`${cat.id}`}
                      checked={categoryIdList.has(cat.id)}
                    />
                  }
                  label={cat.name}
                />
              ))}
            </FormGroup>
          </Grid>
        </Grid>
      </Box>
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

      <Box component="main" mt={10}>
        <Grid container spacing={3}>
          {movieList.map((pelicula) => (
            <Grid xs={12} md={6} lg={4} item key={pelicula.id}>
              <Movie movie={pelicula} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default CategoriesClientPage;
