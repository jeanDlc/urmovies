import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0f123d',
      light:'#2d22a2',
    },
    secondary: {
      main: '#00c899',
      light:'#cafbe7'
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