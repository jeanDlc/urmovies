import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function MovieListSkeleton({ nItems }: { nItems: number }) {
  return (
    <Grid container spacing={2} mt={2}>
      {Array.from(new Array(nItems)).map((index) => (
        <Grid key={index} item xs={12} md={4}>
          <Box sx={{ width: "100%" }}>
            <Skeleton variant="rectangular" height={270} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="80%" />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
