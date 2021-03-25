import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0f123d',
      light:'#403c6d',
    },
    secondary: {
      main: '#00c899',
      light:'##fffade'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#0f123d',
    },
    type:'dark',
    
  },
  
  
});

export default theme;