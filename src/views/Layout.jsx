import React from 'react';
import { renderRoutes } from "react-router-config";
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
} from '@material-ui/core';
import routes from './RootRoutes';
import Suspense from './Suspense';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    width: 100,
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img className={classes.logo} src="/assets/images/logo.png" alt="logo" />
        </Toolbar> 
      </AppBar>
      <Suspense>
          {renderRoutes(routes)}
      </Suspense>
    </div>
  )
}