import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(71, 130, 218)",
      contrastText: "#fff",
    },
    secondary: {
      main: "#1a252f",
      contrastText: "#e1e1e1",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "rgb(27, 38, 53)",
      paper: "rgb(35, 48, 68)",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.95)",
      secondary: "rgba(255, 255, 255, 0.5)",
    },
    mode: "dark",
  },
  typography: {
    // fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});
