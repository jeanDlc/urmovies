import { Api } from "@/services/buildRequestUrl";
import type { Category } from "@/types";

export async function GET() {
  const url = Api.buildRequestUrl({ path: "/genre/movie/list" });
  const res = await fetch(url);

  if (!res.ok) {
    return new Response("Error while fetching all categories", {
      status: res.status,
    });
  }
  const data = await res.json();

  const categories: Category[] = data.genres;

  return Response.json({ categories });
}
