import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Link from "next/link";
import Image from "next/image";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import CategoryIcon from "@mui/icons-material/Category";
import { usePathname } from "next/navigation";
import StarRateIcon from "@mui/icons-material/StarRate";
import { ListItemButton } from "@mui/material";

import type { AppSx } from "@/types";

const DRAWER_WIDTH = 240;

const sxIcon: AppSx = { color: "white" };

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const pathname = usePathname();

  useEffect(() => {
    handleDrawerClose();
  }, [pathname]);

  return (
    <Box width="100%">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box lineHeight={0} component="h1" marginY={0}>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="URmovies"
              width={180}
              height={80}
              draggable={false}
            />
          </Link>
        </Box>
        <IconButton
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{ display: open ? "none" : "initial", color: "white" }}
        >
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <Drawer
        sx={{ width: DRAWER_WIDTH, flexShrink: 0 }}
        variant="persistent"
        anchor="right"
        open={open}
        PaperProps={{
          sx: {
            width: DRAWER_WIDTH,
            backgroundColor: ({ palette }) => palette.secondary.main,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 1,
            justifyContent: "flex-start",
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon sx={sxIcon} />
          </IconButton>
        </Box>
        <Divider />
        <List>
          <ListItemButton LinkComponent={Link} href="/">
            <ListItemIcon>
              <MovieCreationIcon sx={sxIcon} />
            </ListItemIcon>
            <ListItemText primary="Movies" />
          </ListItemButton>
          <ListItemButton LinkComponent={Link} href="/ranking">
            <ListItemIcon>
              <StarRateIcon sx={sxIcon} />
            </ListItemIcon>
            <ListItemText primary="Top rated" />
          </ListItemButton>
          <ListItemButton LinkComponent={Link} href="/categories">
            <ListItemIcon>
              <CategoryIcon sx={sxIcon} />
            </ListItemIcon>
            <ListItemText primary="Categories" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
};

export default MobileMenu;
