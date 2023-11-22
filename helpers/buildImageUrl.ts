import parsePath from "@/helpers/parsePath";

export default function buildImageUrl({ path }: { path: string }) {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";
  return `${imageBaseUrl}${parsePath(path)}`;
}
