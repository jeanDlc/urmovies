import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import NextLink from "next/link";
import Link from "@mui/material/Link";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import CategoryIcon from "@mui/icons-material/Category";
import StarRateIcon from "@mui/icons-material/StarRate";
import { usePathname } from "next/navigation";
import { SxProps } from "@mui/material";
import { AppSx } from "@/types";

const sxLink: SxProps = {
  color: "white",
  fontSize: 20,
  textDecoration: "none",
  display: "flex",
  gap: 1,
  transition: "all .2s ease-out",
  alignItems: "center",
  lineHeight: 1.5,
};

const sxActiveLink: AppSx = {
  ...sxLink,
  backgroundColor: (theme) => theme.palette.primary.main,
  borderRadius: 1,
  paddingY: 1,
  paddingX: 1,
};

const MenuDesktop = () => {
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isRankingPage = pathname === "/ranking";
  const isCategoryPage = pathname === "/categories";

  return (
    <Box component="nav" width="100%">
      <Container>
        <Box
          component="div"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          paddingY={1}
        >
          <NextLink href="/">
            <Box component="h1" lineHeight={0} marginY={0}>
              <Image
                src="/logo.svg"
                alt="URmovies"
                width={300}
                height={80}
                draggable={false}
              />
            </Box>
          </NextLink>
          <Box component="div" display="flex" gap={5}>
            <Link
              href="/"
              component={NextLink}
              sx={isHomePage ? sxActiveLink : sxLink}
            >
              <MovieCreationIcon /> <span>Movies</span>
            </Link>
            <Link
              href="/ranking"
              component={NextLink}
              sx={isRankingPage ? sxActiveLink : sxLink}
            >
              <StarRateIcon /> <span>Top rated</span>
            </Link>
            <Link
              href="/categories"
              component={NextLink}
              sx={isCategoryPage ? sxActiveLink : sxLink}
            >
              <CategoryIcon /> <span>Categories</span>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MenuDesktop;
