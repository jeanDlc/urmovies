import Image from "next/image";
import Buscador from "./Buscador";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import { makeStyles } from '@mui/material/styles';
// const useStyles = makeStyles(theme => ({
//     imagen: {
//       opacity:0.4,
//     },
//     caja:{
//         paddingTop:'10vh',
//         [theme.breakpoints.up('md')]:{
//             paddingTop:'20vh'
//         }
//     }
//   }));
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
          <Buscador />
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
