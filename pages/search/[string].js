import React, {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useTheme, responsiveFontSizes,ThemeProvider  } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Pelicula from '../../components/Pelicula';
import Buscador from '../../components/Buscador';
const Search = () => {
    const [resultados, setResultados]=useState([]);
    let theme = useTheme();
    theme = responsiveFontSizes(theme);
    const router=useRouter();
    const {string}=router.query;
    useEffect(()=>{
        const buscarResultados=async(busqueda)=>{
           try {
                const url=`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=en-US&query=${busqueda}&page=1&include_adult=false`;
                const res=await fetch(url);
                const data=await res.json();
                
                if(data.results){
                    setResultados(data.results);
                    
                }
           } catch (error) {
               console.log(error);
           }
        }
        if(string!=='' || string!==null){
            buscarResultados(string)
        }
    },[string]);
    return ( 
        <Layout>
            <Container component='main' >
                <ThemeProvider theme={theme} >
                    <Grid container spacing={3} >
                        <Grid item xs={12} md={6} lg={4} >
                            <Typography style={{textTransform:'capitalize'}} component='h2' variant='h3' gutterBottom >{string} </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} lg={8} >
                            <Buscador/> 
                        </Grid>
                    </Grid>
                    
                    {resultados.length>0? (
                        <Grid style={{marginTop:10}} container spacing={3} >
                        {resultados.map(res=>(
                            <Grid key={res.id} item xs={12} md={6} xl={4} >
                                <Pelicula detalles={res} />
                            </Grid>
                        ))}
                        
                    </Grid>
                    ):(
                        <Typography component='p' gutterBottom >No results </Typography>
                    )}
                </ThemeProvider>                
            </Container>
        </Layout>
     );
}
 
export default Search;