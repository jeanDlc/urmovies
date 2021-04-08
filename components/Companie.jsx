import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image'
import { useTheme, responsiveFontSizes,ThemeProvider  } from '@material-ui/core/styles';
const Companie = ({detalles}) => {
    let theme = useTheme();
    theme = responsiveFontSizes(theme);
    const {logo_path, name}=detalles;
    
    const urlImagen=`https://image.tmdb.org/t/p/original/${logo_path}`;
    return ( 
        <Box bgcolor={theme.palette.primary.main} borderRadius={10} paddingY={4} paddingX={1.5} >
            <Box height='300px' color={theme.palette.text.secondary} bgcolor='white' borderRadius={8} position='relative' textAlign='center' overflow='hidden' marginBottom={2} >
                <Image
                    src={urlImagen}
                    layout='fill'
                    objectFit='contain'
                    alt='Companie image'
                />
            </Box>
            
            <ThemeProvider theme={theme}>
                <Typography align='center' component='h4' variant='h5' >{name} </Typography> 
            </ThemeProvider> 
        </Box>
     );
}
 
export default Companie;