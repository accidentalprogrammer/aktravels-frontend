import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './SideBar.module.css';
import routes from '../../constants/routes.json';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SideBar(props) {
  const classes = useStyles();
  

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {})}
      role="presentation"
      onClick={props.toggleDrawer(anchor, false)}
      onKeyDown={props.toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button >
          <Link className={`${styles.side_link}`} to={routes.HOME}>
            <ListItemText primary={'Home'} />
          </Link>
        </ListItem>
        <Divider />
        <ListItem button >
          <Link className={`${styles.side_link}`} to={routes.ABOUT_US}>
            <ListItemText primary={'About Us'} />
          </Link>
        </ListItem>
        <Divider />
        <ListItem button >
          <Link className={`${styles.side_link}`} to={routes.CONTACT_US}>
            <ListItemText primary={'Contact Us'} />
          </Link>
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  const anchor = 'right';

  return (
    <div>
      <MenuIcon className={`${styles.menuicon}`} onClick={props.toggleDrawer(anchor, true)} />
      <SwipeableDrawer
        anchor={anchor}
        open={props.toggle}
        onClose={props.toggleDrawer(anchor, false)}
        onOpen={props.toggleDrawer(anchor, true)}
      >
        {list(anchor)}
      </SwipeableDrawer>
    </div>
  );
}