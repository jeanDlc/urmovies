import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2d22a2',
      light:'#d9b1ff',
      contrastText:'#fff'
    },
    secondary: {
      main: '#00c899',
      light:'#cafbe7',
      contrastText:'#fff'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#0f123d',
    },
    text:{
      primary:'#fff',
      secondary:'#444'
    },
    
    
  },
  typography:{
    h1:{
      color:'#ffffff'
    },
    h2:{
      color:'#fff'
    },
  }
  
  
  
});

export default theme;