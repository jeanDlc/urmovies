import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import MenuDesktop from './MenuDesktop';
import MenuMovil from './MenuMovil';
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style:{
      backgroundColor: trigger ? "#0f123d" : "transparent",
    }
  });
}

const Header = () => {
    const theme = useTheme();
    const pantallaDesktop = useMediaQuery(theme.breakpoints.up('md'));
    return ( 
        <>
            <ElevationScroll>
                <AppBar>
                    <Toolbar>
                        {pantallaDesktop?
                            <MenuDesktop/>
                            :
                            <MenuMovil/>
                        }
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
            <Toolbar />
        </>
     );
}
 
export default Header;