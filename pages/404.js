import { Box, Button, Container, Typography } from '@material-ui/core';
import React from 'react';
import { useTheme   } from '@material-ui/core/styles';
import { useRouter } from 'next/router'
import MovieIcon from '@material-ui/icons/Movie';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
const custom404 = () => {
    const theme=useTheme();
    const pantallaDesktop = useMediaQuery(theme.breakpoints.up('md'));
    
    const router=useRouter();
    const redireccionar=()=>{
        router.push('/');
    }
    return ( 
        <Container component='main' style={{textAlign:'center'}} >
            <Box marginTop={pantallaDesktop? '20vh' : '10vh'} >
                <Typography align='center' component='h1' variant='h1' >
                    Not found | 404
                </Typography>
                <Box display='flex' alignItems='center' justifyContent='center' >
                    <Typography align='center' component='p' variant='body1' >I'm sorry, that content doesn't exist</Typography>
                    <SentimentVeryDissatisfiedIcon/>
                </Box>
                <Button variant='contained' 
                    color='secondary' 
                    size='large' 
                    onClick={redireccionar}
                    style={{marginTop:20}}
                >
                    <MovieIcon/> Watch movies
                </Button>
            </Box>
        </Container>
     );
}
 
export default custom404;