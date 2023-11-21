import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

export default function LoadingMovie() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Skeleton variant="rectangular" height={270} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Skeleton />
          <Skeleton width="90%" />
          <Skeleton width="90%" />

          <Skeleton width="50%" sx={{ mt: 2 }} />
          {[1, 2, 3].map((n) => (
            <Skeleton width="50%" key={n} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
