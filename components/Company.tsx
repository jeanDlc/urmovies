import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Company = ({
  details,
}: {
  details: { logo_path: string; name: string };
}) => {
  const { logo_path, name } = details;

  const urlImagen = `https://image.tmdb.org/t/p/original/${logo_path}`;

  return (
    <Box
      sx={{ background: "main" }}
      borderRadius={10}
      paddingY={4}
      paddingX={1.5}
    >
      <Card sx={{ maxWidth: 345 }}>
        <Box
          height="300px"
          bgcolor="white"
          position="relative"
          textAlign="center"
          overflow="hidden"
          marginBottom={2}
        >
          <Image
            src={urlImagen}
            fill
            style={{ objectFit: "contain" }}
            alt="Companie image"
            draggable={false}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Company;
