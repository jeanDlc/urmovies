import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

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
    fontFamily: inter.style.fontFamily,
    h1: {
      fontSize: "3rem",
      "@media (min-width:600px)": {
        fontSize: "4rem",
      },
      fontWeight: 500,
    },
    h2: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
      fontWeight: 400,
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
