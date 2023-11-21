import { MONTH } from "@/constants";
import { Api } from "@/services/buildRequestUrl";

import type { Category, Movie } from "@/types";

export const getRankedMovies = async () => {
  const url = Api.buildRequestUrl({ path: "/movie/top_rated" });

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(
      `Error while fetching popular movies :: ${getRankedMovies.name} `,
    );
  }

  const data = await res.json();

  return data.results as Movie[];
};

export const getPopularMovies = async () => {
  const url = Api.buildRequestUrl({ path: "/movie/popular" });

  const res = await fetch(url, { next: { revalidate: MONTH } });

  if (!res.ok) {
    throw new Error(
      `Error while fetching popular movies :: ${getPopularMovies.name} `,
    );
  }

  const data: {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  } = await res.json();

  return data;
};

export const getCategories = async () => {
  const url = Api.buildRequestUrl({ path: "/genre/movie/list" });
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(
      `Error while fetching categories :: ${getCategories.name} `,
    );
  }

  const data = await res.json();

  return data.genres as Category[];
};

export const searchMovie = async ({ query }: { query: string }) => {
  const url = Api.buildRequestUrl({
    path: "/search/movie",
    params: { query, include_adult: "false" },
  });

  const res = await fetch(url);

  const data = await res.json();

  return data.results as Movie[];
};

export const getMovieById = async (id: string) => {
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
  const movie: Movie = await res.json();

  return movie;
};
