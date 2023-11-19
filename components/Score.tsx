import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const Score = ({ score }: { score: number }) => {
  const movieScore = score * 10;

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        color="secondary"
        variant="determinate"
        value={movieScore}
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
          {Math.round(movieScore)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Score;
