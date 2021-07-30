import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import styles from './MenuBar.module.css';
import SideBar from '../sidebar/SideBar';
import { isMobile } from 'react-device-detect';
import logo from '../../static/images/aktravel_logo.jpg';


function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
    * You won't need it on your project.
    */
  window: PropTypes.func,
};

let MenuBar = (props) => {
  const [drawerState, setDrawerState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };
  return (
    <div>
      <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar>
            <Toolbar className={`${styles.container}`} >
              <span className={`${styles.spacer_edge}`}></span>
              <span className={`${styles.item} ${styles.branding}`} >
                <img className={`${styles.logo}`} src={logo} alt='AK Travels' />
                </span>
              { !isMobile ?
                (<React.Fragment><span className={`${styles.spacer}`}></span>
                <Link className={`${styles.item} ${styles.menu_link}`} to={routes.HOME} >HOME</Link>
                <a className={`${styles.item} ${styles.menu_link}`} href='http://blog.aktravel.in' >BLOG</a>
                <Link className={`${styles.item} ${styles.menu_link}`} to={routes.FLEET} >FLEET</Link>
                <Link className={`${styles.item} ${styles.menu_link}`} to={routes.ABOUT_US} >ABOUT US</Link>
                <Link className={`${styles.item} ${styles.menu_link}`} to={routes.CONTACT_US} >CONTACT US</Link>
                <span className={`${styles.spacer_edge}`}></span></React.Fragment>)
                  :
                (<React.Fragment>
                  <span className={`${styles.spacer}`}></span>
                  <SideBar className={`${styles.item}`} toggleDrawer={toggleDrawer} toggle={drawerState.right} />
                </React.Fragment>)
              }

            </Toolbar>
          </AppBar>
        </ElevationScroll>
      <Toolbar />
      
    </div>
  );
}


export default MenuBar;