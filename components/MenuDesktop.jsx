import React from 'react';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import CategoryIcon from '@material-ui/icons/Category';
import StarRateIcon from '@material-ui/icons/StarRate';
import { useRouter } from 'next/router';
const useStyles = makeStyles(theme => ({
    enlace: {
        color:'white',
      fontSize:20,
      textDecoration:'none',
      display:'flex',
      gap:5,
      transition:'all .2s ease-out',
      '&:hover':{
          color:theme.palette.primary.light,
      },
      alignItems:'center',
      lineHeight:1.5
    },
    activo:{
        //borderBottom:`2px solid ${theme.palette.secondary.light}`
        backgroundColor:theme.palette.primary.main,
        borderRadius:10,
        padding:'10px 12px',
    }
  }));
const MenuDesktop = () => {
    const router=useRouter();
    
    const clases=useStyles();
    return ( 
        <Box component='nav' width='100%'>
            <Container>
                <Box component='div' display='flex' justifyContent='space-between' alignItems='center' paddingY={1} >
                    <Link href='/'>
                        <a>
                            <Box component='h1' lineHeight={0} marginY={0} >
                                <Image
                                    src="/logoPrincipal.svg"
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
                            <a 
                                className={`${clases.enlace} ${router.pathname=='/'? clases.activo: ''} `} 
                            ><MovieCreationIcon/> <span>Movies</span></a>
                        </Link>
                        <Link href='/ranking'>
                            <a 
                                className={`${clases.enlace} ${router.pathname=='/ranking'? clases.activo: ''} `} 
                            ><StarRateIcon/> <span>Top rated</span> </a>
                        </Link>
                        <Link href='/categories' >
                            <a 
                                className={`${clases.enlace} ${router.pathname=='/categories'? clases.activo: ''} `} 
                            ><CategoryIcon/> <span>Categories</span></a>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
     );
}
 
export default MenuDesktop;