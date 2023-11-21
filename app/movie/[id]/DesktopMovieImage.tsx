"use client";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const DesktopMovieImage = ({ imageUrl }: { imageUrl: string }) => {
  const theme = useTheme();

  const pantallaDesktop = useMediaQuery(theme.breakpoints.up("md"));

  if (!pantallaDesktop) return null;

  return (
    <Grid item xs={12} md={4}>
      <Box width="100%" position="relative" height="600px">
        <Image
          src={imageUrl}
          alt="Movie poster image"
          layout="intrinsic"
          width={700}
          height={1000}
          style={{ borderRadius: 10 }}
        />
      </Box>
    </Grid>
  );
};

export default DesktopMovieImage;
