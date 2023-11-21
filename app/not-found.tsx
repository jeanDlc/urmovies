import Link from "next/link";
import Typography from "@mui/material/Typography";
import MovieIcon from "@mui/icons-material/Movie";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const NotFoundPage = () => {
  return (
    <Container component="main" style={{ textAlign: "center" }}>
      <Box
        sx={{
          height: "calc(100vh - 300px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography align="center" component="h1" variant="h2">
            Not found | 404
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography align="center" component="p" variant="body1">
              You have probably visited the wrong url
            </Typography>
          </Box>
          <Button
            LinkComponent={Link}
            href="/"
            color="secondary"
            size="large"
            sx={{ mt: 2 }}
            startIcon={<MovieIcon />}
          >
            Watch movies
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
