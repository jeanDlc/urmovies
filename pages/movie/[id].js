import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { Container } from '@material-ui/core';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes,ThemeProvider  } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Puntaje from '../../components/Puntaje';
import LanguageIcon from '@material-ui/icons/Language';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
    bg: {
      opacity:0.3,
      
    },
    imagen:{
        borderRadius:10
    }
  }));
const Movie = () => {
    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);
    const pantallaDesktop = useMediaQuery(theme.breakpoints.up('md'));
    
    const classes=useStyles();
    const router=useRouter();
    const {id}=router.query;
    const [dataPelicula, setDataPelicula]=useState(null);
    useEffect(()=>{
        const getDataPelicula=async (idPelicula)=>{
            const url=` https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=en-US`;
            const data= await fetch(url);
            const pelicula=await data.json();
            setDataPelicula(pelicula);
            console.log(pelicula)
        }
        if(id){
            getDataPelicula(id);
        }
        
    },[id]);
    if(!dataPelicula) return null;
    const {backdrop_path,title,vote_average,tagline,overview,poster_path,release_date,original_language,genres,production_companies}=dataPelicula;
    const urlImagen=`https://image.tmdb.org/t/p/original/${backdrop_path}`;
    const urlImgPoster=`https://image.tmdb.org/t/p/original/${poster_path}`;
    return ( 
        <Layout>
            <Image
                src={urlImagen}
                alt="Logo movie"
                layout='fill'
                objectFit="cover"
                quality={100}
                className={classes.bg}
            />
            <Box height='90vh' marginTop={5} >
                <Container >
                    <Grid container spacing={3} >
                        {pantallaDesktop && (
                            <Grid item xs={12} md={4} >
                                <Box width='100%' position='relative' height='600px' >
                                    <Image
                                        src={urlImgPoster}
                                        alt="Movie Image"
                                        layout="intrinsic"
                                        width={700}
                                        height={1000}
                                        className={classes.imagen}
                                    />
                                </Box>
                            </Grid>
                        )}
                        <Grid item xs={12} md={8} >
                            <Box component='main' position='relative' zIndex={3} >
                                <ThemeProvider theme={theme}>
                                    <Typography component='h2' variant='h3' >{title} </Typography> 
                                    <Typography gutterBottom >{tagline}</Typography>
                                    <Typography gutterBottom >{new Date(release_date).getFullYear()}</Typography>
                                </ThemeProvider> 
                                <Puntaje rank={vote_average} />
                                <ThemeProvider theme={theme}>
                                    <Typography variant='h6' gutterBottom >{overview}</Typography>
                                </ThemeProvider> 
                                <Box display='flex' > 
                                    <LanguageIcon/>
                                    <Typography >Original Language: {original_language} </Typography>
                                </Box>
                                <List component="ul" aria-label="main mailbox folders">
                                    {genres.map(genero=>(
                                        <ListItem key={genero.id} >
                                            {genero.name}
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {production_companies.length>0 && (
                <Container component='section' >
                    <ThemeProvider theme={theme}>
                        <Typography component='p' variant='h6' gutterBottom >Companies:</Typography>
                    </ThemeProvider> 
                    
                </Container>
            )}
            
        </Layout>
     );
}
 
export default Movie;