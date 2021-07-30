import * as React from 'react';
import styles from './HomePage.module.css';
import Menubar from '../../components/menu-bar/MenuBar';
import Footer from '../../components/footer/Footer';
import HowItWorks from '../../components/how-it-works/HowItWorks';
import { Divider } from '@material-ui/core';
import WhatWeOffer from '../../components/what-we-offer/WhatWeOffer';

let HomePage = (props) => {
  return (
    <div className={`${styles.container}`}>
      <Menubar className={`${styles.item}`} />
      <span style={{height: '20px'}}></span>
      <div className={`${styles.item} ${styles.banner_container}`} >
      </div>
      <WhatWeOffer className={`${styles.item}`} />
      <HowItWorks className={`${styles.item}`} />
      <Divider className={`${styles.item} ${styles.divider}`} />
      <Footer className={`${styles.item}`} />
    </div>
  );
}

  
export default HomePage;