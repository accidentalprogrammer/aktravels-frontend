import * as React from 'react';
import styles from './ContactUsPage.module.css';
import Menubar from '../../components/menu-bar/MenuBar';
import Footer from '../../components/footer/Footer';
import GmapLocation from '../../components/gmap-location/GmapLocation';
import ContactWrapper from '../../components/contact-wrapper/ContactWrapper';


let ContactUsPage = (props) => {
  return (
    <div className={`${styles.container}`}>
      <Menubar className={`${styles.item}`} />
      <span style={{height: '20px'}}></span>
      <GmapLocation className={`${styles.item}`} />
      <ContactWrapper className={`${styles.item}`} />
      <Footer className={`${styles.item}`} />
    </div>
  );
}

  
export default ContactUsPage;