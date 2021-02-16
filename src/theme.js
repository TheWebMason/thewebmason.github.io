import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';



const theme = (prefersDarkMode) => createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: prefersDarkMode ? '#121212' : '#fff',
    },
    type: prefersDarkMode ? 'dark' : 'light',
  },
});

export default theme;
