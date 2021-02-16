import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Copyright from './Copyright';
import useStyles from './styles';
import { useTheme } from '@material-ui/core/styles';



function App() {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className={classes.root}>
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          TheWebMason
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Coming soon...'}
        </Typography>
        {/*<Typography variant="body1">...</Typography>*/}
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default App;
