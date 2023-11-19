import Image from "next/image";
import SearchInput from "./SearchInput";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Hero = () => {
  return (
    <Box component="section" minHeight="100vh">
      <Image
        src="/hero.jpg"
        alt="URmovies"
        fill
        quality={100}
        style={{ opacity: 0.4 }}
      />
      <Box position="relative" sx={{ paddingTop: "10vh" }}>
        <Typography
          style={{ fontWeight: "bold" }}
          variant="h1"
          align="center"
          component="h1"
          gutterBottom
        >
          Your favorite Movies
        </Typography>
        <Typography variant="h4" component="p" align="center" gutterBottom>
          Find your Movie:
        </Typography>
        <Container maxWidth="sm">
          <SearchInput />
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
