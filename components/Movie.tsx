import Image from "next/image";
import Typography from "@mui/material/Typography";
import Score from "@/components/Score";
import Box from "@mui/material/Box";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import readMore from "@/helpers/readMore";
import buildImageUrl from "@/helpers/buildImageUrl";

import type { Movie as IMovie } from "@/types";

const Movie = ({ movie }: { movie: IMovie }) => {
  const { title, id, overview, poster_path, vote_average, release_date } =
    movie;

  const imageUrl = buildImageUrl({ path: poster_path });

  return (
    <Card>
      <CardActionArea LinkComponent={Link} href={`/movie/${id}`}>
        <Box
          sx={{
            width: "100%",
            position: "relative",
            height: "450px",
            marginBottom: 1.1,
          }}
        >
          <Image
            src={imageUrl}
            alt="Movie Photo"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
        <CardContent>
          <Box
            display="flex"
            gap={1}
            alignItems={"center"}
            justifyContent={"space-between"}
            mb={1}
          >
            <Typography variant="h6" component="h3">
              {title}
            </Typography>
            <Score score={vote_average} />
          </Box>

          <Typography variant="body2" color="text.secondary" gutterBottom>
            {readMore(overview, 20)}
          </Typography>

          <Box textAlign="end">
            {release_date && (
              <Typography variant="caption">
                {new Date(release_date).getFullYear()}{" "}
              </Typography>
            )}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Movie;
