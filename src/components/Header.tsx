import React from 'react';

import {
  colors,

  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  makeStyles, useTheme,
} from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';

const Header = () => {
  const theme = useTheme();

  const classes = {
    AppBar: makeStyles({
      root: {
        backgroundColor: colors.yellow[700],
        flexGrow: 1,
        padding: theme.spacing(2),
      },
    })(),
    IconButton: makeStyles({
      root: {
        marginRight: theme.spacing(2),
      },
    })(),
    Typography: makeStyles({
      root: {
        fontFamily: '"Varela Round", sans-serif',
        letterSpacing: 3,
      },
    })(),
  };

  return (
    <AppBar
      position="sticky"
      classes={classes.AppBar}
    >
      <Toolbar>
        <IconButton
          classes={classes.IconButton}
          size="medium"
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          classes={classes.Typography}
          variant="h5"
        >
          Portfolio
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
