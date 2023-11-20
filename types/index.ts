import { theme } from "@/components/ThemeRegistry/theme";
import { SxProps } from "@mui/material";

export type AppTheme = typeof theme;

export type AppSx = SxProps<AppTheme>;

interface Field {
  id: string;
  name: string;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
  genres: Field[];
  production_companies: { id: string; logo_path: string; name: string }[];
  tagline: string;
  status: string;
  spoken_languages: Field[];
}

export interface Category {
  id: number;
  name: string;
}
