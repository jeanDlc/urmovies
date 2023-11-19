import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const Puntaje = ({ rank }) => {
  const movieRanking = rank * 10;
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        color="secondary"
        variant="determinate"
        value={movieRanking}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textPrimary">
          {Math.round(movieRanking)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Puntaje;
