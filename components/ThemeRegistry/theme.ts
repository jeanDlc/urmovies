import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2d22a2",
      light: "#d9b1ff",
      contrastText: "#fff",
    },
    secondary: {
      main: "#00c899",
      light: "#cafbe7",
      contrastText: "#fff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#0f123d",
    },
    text: {
      primary: "#fff",
      secondary: "#444",
    },
  },
  typography: {
    // fontFamily: roboto.style.fontFamily,
    h1: {
      color: "#ffffff",
    },
    h2: {
      color: "#fff",
    },
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
