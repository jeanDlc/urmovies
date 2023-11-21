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
import Movie from "@/components/Movie";

import type { ChangeEvent } from "react";
import type { Category, Movie as IMovie } from "@/types";

const CategoriesClientPage = ({ categories }: { categories: Category[] }) => {
  const theme = useTheme();

  const [selectedCategories, setSelectedCategories] = useState(
    new Set<Category["id"]>(),
  );

  const [moviesResult, setMoviesResult] = useState<IMovie[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const categoryIdListCopy = new Set(selectedCategories);

    const id = Number(event.target.id);

    if (!categoryIdListCopy.has(id)) {
      categoryIdListCopy.add(id);
    } else {
      categoryIdListCopy.delete(id);
    }

    setSelectedCategories(categoryIdListCopy);
  };

  const searchByCategory = async () => {
    if (message) {
      setMessage("");
    }

    setIsLoading(true);

    try {
      const params = new URLSearchParams();

      params.append("categories", Array.from(selectedCategories).toString());

      const res = await fetch(`/categories/api/search?${params.toString()}`);

      const { data } = await res.json();

      if (data.length === 0) {
        setMessage("No results");
      }
      setIsLoading(false);

      setMoviesResult(data);
    } catch (error) {
      setIsLoading(false);
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
                disabled={isLoading}
              >
                Search
              </Button>
              <Button
                onClick={() => {
                  setSelectedCategories(new Set());
                }}
                color="secondary"
                fullWidth={true}
                size="large"
                variant="contained"
                endIcon={<ClearIcon />}
                disabled={selectedCategories.size === 0}
              >
                Reset
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={12}>
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
                      checked={selectedCategories.has(cat.id)}
                    />
                  }
                  label={cat.name}
                />
              ))}
            </FormGroup>
          </Grid>
        </Grid>
      </Box>
      {isLoading && (
        <Box textAlign="center" marginTop={20}>
          <CircularProgress />
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
          {moviesResult.map((movie) => (
            <Grid xs={12} md={6} lg={4} item key={movie.id}>
              <Movie movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default CategoriesClientPage;
