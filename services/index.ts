import { MONTH } from "@/constants/toMiliseconds";
import { Api } from "@/services/buildRequestUrl";

import type { Movie } from "@/types";

export const getRankedMovies = async () => {
  const url = Api.buildRequestUrl({ path: "/movie/top_rated" });

  const res = await fetch(url);
  const data = await res.json();

  return data.results as Movie[];
};

export const getPopularMovies = async () => {
  const url = Api.buildRequestUrl({ path: "/movie/popular" });

  const res = await fetch(url, { next: { revalidate: MONTH } });

  const data: {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  } = await res.json();

  return data;
};
