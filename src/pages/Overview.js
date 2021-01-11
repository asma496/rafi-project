import React, {useState} from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Sidebar from '../components/Sidebar' 

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 8,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -10,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 240,
  },

}));
const Overview = () => {
  const classes = useStyles();
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: sidebar,
        })}
      >
        <div className={classes.drawerHeader} />
        <h1 ></h1>
        <Typography paragraph>
      l. 
        
        </Typography>
      
      </main>
    
    </>
  );
};

export default Overview;
