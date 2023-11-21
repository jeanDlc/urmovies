import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import NextLink from "next/link";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import CategoryIcon from "@mui/icons-material/Category";
import StarRateIcon from "@mui/icons-material/StarRate";
import { usePathname } from "next/navigation";
import { styled } from "@mui/material/styles";

const StyledLink = styled(NextLink)<{ isActive: boolean }>(({
  isActive,
  theme,
}) => {
  return {
    color: isActive ? theme.palette.primary.main : "white",
    fontSize: 20,
    textDecoration: "none",
    display: "flex",
    gap: theme.spacing(1),
    transition: "all .2s ease-out",
    alignItems: "center",
    lineHeight: 1.5,
    padding: theme.spacing(1),
    borderBottom: "2px solid transparent",
    borderColor: isActive ? theme.palette.primary.main : "transparent",
  };
});

const DesktopMenu = () => {
  const pathname = usePathname();

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
          <Box component="div" display="flex" gap={2}>
            <StyledLink href="/" isActive={pathname === "/"}>
              <MovieCreationIcon /> <span>Movies</span>
            </StyledLink>
            <StyledLink href="/ranking" isActive={pathname === "/ranking"}>
              <StarRateIcon /> <span>Top rated</span>
            </StyledLink>
            <StyledLink
              href="/categories"
              isActive={pathname === "/categories"}
            >
              <CategoryIcon /> <span>Categories</span>
            </StyledLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DesktopMenu;
