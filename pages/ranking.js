import React from 'react';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Pelicula from '../components/Pelicula';

const Series = ({rank}) => {
    
    if(!rank) return <Typography component='h2' variant='h3' >Ranking is not available</Typography>
    return ( 
        <>
            <Head>
                <title>URmovies | Ranking</title>
            </Head>
            <Container component='main' >
                <Typography component='h2' variant='h3' gutterBottom >Ranking</Typography>
                <Grid container spacing={3} >
                    {rank?.results?.map(pelicula=>(
                        <Grid key={pelicula.id} item xs={12} sm={6} lg={4} >
                            <Pelicula detalles={pelicula} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
     );
}
export async function getStaticProps(){
    const url=`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=en-US&page=1`;
    const res=await fetch(url);
    const rank=await res.json();
    return {
        props:{
            rank
        }
    }
}
export default Series;