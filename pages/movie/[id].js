import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import { Container } from '@mui/material';
import Image from 'next/image';
import { makeStyles } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Puntaje from '../../components/Puntaje';
import LanguageIcon from '@mui/icons-material/Language';
import Companie from '../../components/Companie';
import Head from 'next/head';
const useStyles = makeStyles(theme => ({
    bg: {
      opacity:0.3,
      
    },
    imagen:{
        borderRadius:10
    },
    li:{
        display:'inline-block',
        marginRight:'15px',
        textDecoration:'none',
        listStyle:'none'
    }
  }));
const Movie = () => {
    let theme = useTheme ();
    const pantallaDesktop = useMediaQuery(theme.breakpoints.up('md'));
    
    const classes=useStyles();
    const router=useRouter();
    const {id}=router.query;
    const [dataPelicula, setDataPelicula]=useState(null);
    
    useEffect(()=>{
        const getDataPelicula=async (idPelicula)=>{
            try {
                const url=` https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=en-US`;
                const data= await fetch(url);
                const pelicula=await data.json();
                setDataPelicula(pelicula);
                
            } catch (error) {
                console.log(error);
            }
            
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
    <>
        <Head>
            <title>URmovies | Movie</title>
        </Head>
        <Image
            src={urlImagen}
            alt="Logo movie"
            layout='fill'
            objectFit="cover"
            quality={100}
            className={classes.bg}
            draggable={false}
        />
        <Box height='90vh' marginTop={pantallaDesktop? 6 : 1} >
            <Container >
                <Grid container spacing={3} >
                    {pantallaDesktop && (
                        <Grid item xs={12} md={4} >
                            <Box width='100%' position='relative' height='600px' >
                                <Image
                                    src={urlImgPoster}
                                    alt="Movie poster image"
                                    layout="intrinsic"
                                    width={700}
                                    height={1000}
                                    className={classes.imagen}
                                />
                            </Box>
                        </Grid>
                    )}
                    <Grid item xs={12} md={8} >
                            <Box component='main' overflow='auto' maxHeight='80vh' position='relative' zIndex={3} >
                                    <Typography component='h2' variant='h3' >{title} </Typography> 
                                    <Typography gutterBottom >{tagline}</Typography>
                                    {release_date!==''?(
                                        <Typography gutterBottom >{new Date(release_date).getFullYear()}</Typography>
                                    ) : null}
                                <Puntaje rank={vote_average} />
                                <Typography component='p' variant={pantallaDesktop? 'h6' :'body1' } gutterBottom >{overview} </Typography>
                                <Box display='flex' > 
                                    <LanguageIcon/>
                                    <Typography >Original Language: {original_language} </Typography>
                                </Box>
                                <Box component='ul' display='flex' flexWrap='wrap' >
                                    {genres.map(genero=>(
                                        <li className={classes.li} key={genero.id} >
                                            {genero.name}
                                        </li>
                                    ))}
                                </Box>
                            </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        {production_companies.length>0 && (
            <Container component='section' >
                    <Typography component='h3' variant='h5' gutterBottom >Companies:</Typography>
                <Grid container spacing={3} style={{marginBottom:'30px'}} >
                    {production_companies.map(comp=>(
                        <Grid key={comp.id} item xs={12} md={6} lg={4} >
                            <Companie detalles={comp} />
                        </Grid>
                    ))}
                </Grid>
                
            </Container>
        )}
        
    </>
     );
}
 
export default Movie;