import React from 'react';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
const Puntaje = ({rank}) => {
    const puntaje_pelicula=rank*10;
    return ( 
        <Box position="relative" display="inline-flex">
            <CircularProgress color='primary' variant="determinate" value={puntaje_pelicula} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" color="textSecondary">{puntaje_pelicula}</Typography>
            </Box>
        </Box>
     );
}
 
export default Puntaje;