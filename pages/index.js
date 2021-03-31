import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Pelicula from '../components/Pelicula';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
export default function Home({peliculas}) {
  
  return (
    <Layout>
        <Head>
          <title>URmovies | Home</title>
        </Head>
        <Hero/>
      <Container component='main' >
        <Typography component='h2' variant='h2'  gutterBottom >Movies</Typography>
        <Grid container spacing={3}>
            {peliculas?.results?.map(pelicula=>(
              <Grid key={pelicula.id} item xs={12} sm={6} lg={4} >
                <Pelicula  detalles={pelicula}  />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Layout>
  )
}
export async function getStaticProps(){
  const url=`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=en-US&page=1`;
  
  const res= await fetch(url);
  const peliculas=await res.json();
  
  return{
    props:{
      peliculas
    }
  }
}
