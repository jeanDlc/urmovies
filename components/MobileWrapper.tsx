import Box from "@mui/material/Box";

import type { ReactNode } from "react";
import type { AppSx } from "@/types";

const MobileWrapper = ({
  children,
  sx,
}: {
  children: ReactNode;
  sx: AppSx;
}) => {
  return (
    <Box
      sx={{
        display: { xl: "none", xs: "block", md: "none" },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default MobileWrapper;
