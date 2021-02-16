import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';
import useMediaQuery from '@material-ui/core/useMediaQuery';



function Root() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  return (
    <ThemeProvider theme={theme(true)}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

export default Root;
