import React from 'react';

import { Box, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const HomeContainer = () => {
  const theme = useTheme();

  const classes = {
    Box: makeStyles({
      root: {
        padding: theme.spacing(4),
      },
    })(),
  };

  return (
    <Box
      padding={8}
    >
      <Typography
        variant="body2"
        color="inherit"
      >
        홈
      </Typography>
    </Box>
  );
};

export default HomeContainer;
