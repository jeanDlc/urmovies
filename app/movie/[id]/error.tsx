"use client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Alert from "@mui/material/Alert";
import Link from "next/link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container>
      <Typography component={"h1"} variant="h3" sx={{ mb: 2 }}>
        Error
      </Typography>
      <Alert severity="error" sx={{ mb: 3 }}>
        {error.message}
      </Alert>

      <Button LinkComponent={Link} href="/" startIcon={<ArrowBackIosIcon />}>
        Go home
      </Button>
    </Container>
  );
}
