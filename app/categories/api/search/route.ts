import { Api } from "@/services/buildRequestUrl";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const categories = searchParams.get("categories") ?? "";

  const url = Api.buildRequestUrl({
    path: "/discover/movie",
    params: {
      sort_by: "popularity.desc",
      include_adult: "false",
      include_video: "false",
      with_genres: categories,
    },
  });

  const res = await fetch(url);

  if (!res.ok) {
    return new Response("Error while fetching searching movies by category", {
      status: res.status,
    });
  }

  const { results } = await res.json();

  return Response.json({ data: results });
}
