import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://www.TheWebMason.org/">
        TheWebMason
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;
