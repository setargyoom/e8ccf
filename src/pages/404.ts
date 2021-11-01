// 404.tsx

import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import { NextPage } from 'next';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 540,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  mt: {
    marginTop: 10
  }
})
const Custom404Page:NextPage = () => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>The page you were looking for doesn't exist | 404</title>
      </Head>
      <Box className={classes.root}>
        <img src="/favicons/custom-404.jpeg" width="320" height="320" />
        <Typography className={classes.mt}>
          This page does not exist
        </Typography>
        <Typography className={classes.mt}>
          <a href="/">Return to Home Page</a>
        </Typography>
      </Box>
    </>
  )
}

export default Custom404Page;
