import React from 'react';

// Material UI Components 
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'


const Copyright = () => {
  return (
    <Typography variant='body2' color='GrayText' align='center'>
      {'Copyright (C)'}
      <Link color='inherit' href='htpps://imaginaformacion.com'>
          Imagina Formación
          {' '}
          {new Date().getFullYear()}
      </Link>
    </Typography>
  );
}

export default Copyright;
