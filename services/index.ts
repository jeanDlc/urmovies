import { Api } from "@/services/buildRequestUrl";

import type { Movie } from "@/types";

export const getRankedMovies = async () => {
  const url = Api.buildRequestUrl({ path: "/movie/top_rated" });

  const res = await fetch(url);
  const data = await res.json();

  return data.results as Movie[];
};
