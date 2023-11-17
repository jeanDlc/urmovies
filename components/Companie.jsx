import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
const Companie = ({ detalles }) => {
  let theme = useTheme();

  const { logo_path, name } = detalles;

  const urlImagen = `https://image.tmdb.org/t/p/original/${logo_path}`;
  return (
    <Box
      bgcolor={theme.palette.primary.main}
      borderRadius={10}
      paddingY={4}
      paddingX={1.5}
    >
      <Box
        height="300px"
        color={theme.palette.text.secondary}
        bgcolor="white"
        borderRadius={8}
        position="relative"
        textAlign="center"
        overflow="hidden"
        marginBottom={2}
      >
        <Image src={urlImagen} fill alt="Companie image" draggable={false} />
      </Box>
      <Typography align="center" component="h4" variant="h5">
        {name}{" "}
      </Typography>
    </Box>
  );
};

export default Companie;
