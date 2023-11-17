"use client";
import { cloneElement } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuDesktop from "./MenuDesktop";
import MenuMovil from "./MenuMovil";

function ElevationScroll(props: any) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? "#0f123d" : "transparent",
    },
  });
}

const Header = () => {
  const theme = useTheme();
  const pantallaDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>{pantallaDesktop ? <MenuDesktop /> : <MenuMovil />}</Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Toolbar />
    </>
  );
};

export default Header;
