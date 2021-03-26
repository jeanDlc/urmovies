import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Link from 'next/link';
import Image from 'next/image';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import CategoryIcon from '@material-ui/icons/Category';
import { useRouter } from 'next/router'
const drawerWidth = 240;
/**Estilos para el componente**************************************************** */
const useStyles = makeStyles((theme) => ({
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:theme.palette.secondary.main
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
}));
/**Componente**************************************************** */
const MenuMovil = () => {
    const router=useRouter();
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const linkear=href=>{
        //cambiar de página
        router.push(href);
        handleDrawerClose();
    }
    return ( 
        <Box width='100%' >
            <Box display='flex'  justifyContent='space-between' alignItems='center' >
                <Box lineHeight={0} component='h1' marginY={0} ><Link href='/'>
                    <a style={{display:'inline-block'}} >
                        <Image
                            src="/hero.svg"
                            alt="URmovies"
                            width={180}
                            height={80}
                            draggable={false}
                        />
                    </a>
                </Link></Box>
                <IconButton
                    color="secondary"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerOpen}
                    className={clsx(open && classes.hide)}
                >
                <MenuIcon />
            </IconButton>
            </Box>
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem onClick={()=>linkear('/')}  button key={1}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary='Home' />
                </ListItem>
                <ListItem button onClick={()=>linkear('/')} key={1}>
                    <ListItemIcon><MovieCreationIcon /></ListItemIcon>
                    <ListItemText primary='Movies' />
                </ListItem>
                <ListItem button onClick={()=>linkear('/')} key={1}>
                    <ListItemIcon><LiveTvIcon /></ListItemIcon>
                    <ListItemText primary='TV' />
                </ListItem>
                <ListItem button onClick={()=>linkear('/')} key={1}>
                    <ListItemIcon><CategoryIcon /></ListItemIcon>
                    <ListItemText primary='Categories' />
                </ListItem>
            </List>
        </Drawer>
        </Box>
     );
}
 
export default MenuMovil;