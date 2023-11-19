"use client";
import { useState } from "react";
import Image from "next/image";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Score from "@/components/Score";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useRouter } from "next/navigation";

import type { Movie as IMovie } from "@/types";

const Movie = ({ movie }: { movie: IMovie }) => {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const { title, id, overview, poster_path, vote_average, release_date } =
    movie;

  const imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  //redireccionar
  const goToMoviePage = () => {
    if (!id) {
      return;
    }
    router.push(`/movie/${id}`);
  };

  return (
    <Box
      sx={{
        padding: 1.2,
        borderRadius: "10px",
        backgroundColor: ({ palette }) => palette.primary.main,
      }}
    >
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
          style={{ borderRadius: 9, transition: "opacity .3s ease-out" }}
          onClick={goToMoviePage}
          draggable={false}
        />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Link href={`/movie/${id}`}>
          <Typography
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={(event) => {
              setAnchorEl(event.currentTarget);
            }}
            onMouseLeave={handlePopoverClose}
            component="h3"
            variant="h5"
            gutterBottom
            style={{ cursor: "pointer" }}
          >
            {title}
          </Typography>
        </Link>
        <Score score={vote_average} />
      </Box>
      {release_date !== "" ? (
        <Typography>{new Date(release_date).getFullYear()} </Typography>
      ) : null}
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: "none" }}
        slotProps={{
          paper: {
            sx: {
              padding: 1,
              backgroundColor: ({ palette }) => palette.secondary.main,
            },
          },
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>
          {overview.length > 100 ? `${overview.slice(0, 100)}...` : overview}{" "}
        </Typography>
      </Popover>
    </Box>
  );
};

export default Movie;
