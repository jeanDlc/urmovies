"use client";
import { cloneElement } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTheme } from "@mui/material/styles";
import MenuDesktop from "@/components/MenuDesktop";
import MenuMovil from "@/components/MenuMovil";
import Box from "@mui/material/Box";

function ElevationScroll(props: any) {
  const { palette } = useTheme();
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? palette.background.default : "transparent",
    },
  });
}

const Header = () => {
  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Box
              sx={{
                display: { xl: "none", xs: "block", md: "none" },
                width: "100%",
              }}
            >
              <MenuMovil />
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" }, width: "100%" }}>
              <MenuDesktop />
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Toolbar />
    </>
  );
};

export default Header;
