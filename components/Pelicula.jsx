import React from 'react';
import Image from 'next/image';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Puntaje from './Puntaje';
import Box from '@material-ui/core/Box';
import Link from 'next/link';
import { useRouter } from 'next/router';
/**estilos************************************************************ */
const useStyles = makeStyles((theme) => ({
    popover: {
      pointerEvents: 'none',
    },
    paper: {
      padding: theme.spacing(1),
      backgroundColor:theme.palette.secondary.main,
      
    },
    peliculaContainer:{
        padding:9,
        borderRadius:'10px',
        backgroundColor:theme.palette.primary.main,
    },
    imagen:{
        borderRadius:9,
        transition: 'opacity .3s ease-out',
        '&:hover':{
            cursor:'pointer',
            opacity:0.7
        }
    },
    contenedorImagen:{
        width:'100%',
        position:'relative',
        height:'450px',
        marginBottom:10
    }
  }));
/**componente************************************************************* */
const Pelicula = ({detalles}) => {
    
    const router=useRouter();

    /**para el popover******* */
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    //info de la pelicula
    const {title,id,overview,poster_path,vote_average,release_date}=detalles;
    const urlImagen=`https://image.tmdb.org/t/p/original${poster_path}`;

    //redireccionar
    const linkear=()=>{
        if(!id){
            return;
        }
        router.push(`/movie/${id}`);
    }

    return ( 
        <div className={classes.peliculaContainer} >
            <div className={classes.contenedorImagen} >
                <Image
                    src={urlImagen}
                    alt="Movie Photo"
                    layout='fill'
                    objectFit="cover"
                    className={classes.imagen}
                    onClick={linkear}
                    draggable={false}
                />
            </div> 
            <Box display='flex' alignItems='center' justifyContent='space-between' >
                <Link href={`/movie/${id}`} >
                    <Typography
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        component='h3'
                        variant='h5' gutterBottom
                        style={{cursor:'pointer'}}
                    >
                        {title}
                    </Typography>
                </Link>
                <Puntaje rank={vote_average} />
            </Box>
            {release_date!==''?(
                <Typography >{new Date(release_date).getFullYear()} </Typography>
            ) : null}
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{paper: classes.paper,}}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{vertical: 'bottom',horizontal: 'left',}}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography>{overview} </Typography>
            </Popover>
        </div>
    );
}
 
export default Pelicula;