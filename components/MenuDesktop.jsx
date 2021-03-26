import React from 'react';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import CategoryIcon from '@material-ui/icons/Category';
const useStyles = makeStyles(theme => ({
    enlace: {
      color:theme.palette.secondary.light,
      fontSize:20,
      textDecoration:'none',
      display:'flex',
      gap:5,
      transition:'all .2s ease-out',
      '&:hover':{
          color:theme.palette.secondary.main,
      },
      alignItems:'center'
    },
  }));
const MenuDesktop = () => {
    const clases=useStyles();
    return ( 
        <Box component='nav' width='100%'>
            <Container>
                <Box component='div' display='flex' justifyContent='space-between' alignItems='center' paddingY={1} >
                    <Link href='/'>
                        <a>
                            <Box component='h1' lineHeight={0} marginY={0} >
                                <Image
                                    src="/hero.svg"
                                    alt="URmovies"
                                    width={300}
                                    height={80}
                                    draggable={false}
                                />
                            </Box>
                        </a>
                    </Link>
                    <Box component='div' display='flex' gridGap={45}>
                        <Link href='/'>
                            <a className={clases.enlace} ><MovieCreationIcon/> <span>Movies</span></a>
                        </Link>
                        <Link href='/'>
                            <a className={clases.enlace} ><LiveTvIcon/> <span>TV</span> </a>
                        </Link>
                        <Link href='/' >
                            <a className={clases.enlace} ><CategoryIcon/> <span>Categories</span></a>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
     );
}
 
export default MenuDesktop;