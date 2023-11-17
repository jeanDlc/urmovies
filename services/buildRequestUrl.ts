export class Api {
  private static BASE_URL = "https://api.themoviedb.org/3";

  static buildRequestUrl({
    path,
    params,
  }: {
    path: string;
    params?: Record<string, string>;
  }) {
    const url = new URL(`${this.BASE_URL}${path}`);

    url.searchParams.append("api_key", `${process.env.NEXT_PUBLIC_TMDB_API}`);
    url.searchParams.append("language", "en-US");
    url.searchParams.append("page", "1");

    if (params) {
      for (const [name, value] of Object.entries(params)) {
        url.searchParams.append(name, value);
      }
    }

    return url.href;
  }
}
