import Box from "@mui/material/Box";

import type { ReactNode } from "react";
import type { AppSx } from "@/types";

const DesktopWrapper = ({
  children,
  sx,
}: {
  children: ReactNode;
  sx?: AppSx;
}) => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" }, ...sx }}>{children}</Box>
  );
};

export default DesktopWrapper;
