import React from 'react';
import Image from 'next/image';
import Buscador from './Buscador';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes,ThemeProvider  } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    imagen: {
      opacity:0.4,
    },
    caja:{
        paddingTop:'10vh',
        [theme.breakpoints.up('md')]:{
            paddingTop:'20vh'
        }
    }
  }));
const Hero = () => {
    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);
    const classes=useStyles();
    return ( 
       <Box component='section' minHeight='100vh'  >
                <Image
                    src="/hero.jpg"
                    alt="URmovies"
                    layout='fill'
                    objectFit="cover"
                    quality={100}
                    className={classes.imagen}
                />
            <Box position='relative' className={classes.caja} >
                <ThemeProvider theme={theme}>
                        <Typography style={{fontWeight:'bold'}}  variant="h1" align='center' component="h1" gutterBottom>
                            Your favorite Movies
                        </Typography>
                        <Typography variant="h4" component="p" align='center' gutterBottom>
                                    Find your Movie:
                        </Typography>
                </ThemeProvider>                
                <Container maxWidth='sm' >
                    <Buscador/>
                </Container>
            </Box>
       </Box>
     );
}
 
export default Hero;