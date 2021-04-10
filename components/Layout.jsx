import React from 'react';
import Header from './Header';
import { useTheme , responsiveFontSizes,ThemeProvider  } from '@material-ui/core/styles';
const Layout = ({children}) => {
    let theme = useTheme ();
    theme = responsiveFontSizes(theme);
    return ( 
        <ThemeProvider theme={theme} >
            <Header/>
            {children}
        </ThemeProvider>
     );
}
 
export default Layout;