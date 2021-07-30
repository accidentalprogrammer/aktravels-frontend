import React from 'react';
import styles from './ContactWrapper.module.css';
import ContactForm from '../contact-form/ContactForm';
import ContactDetailsCard from '../contact-details-card/ContactDetailsCard';
import { isMobile } from 'react-device-detect';



let ContactWrapper = (props) => {

  return (
    <div className={`${styles.container}`}>
      { isMobile ? null : <span className={`${styles.spacer_edge}`}></span> }
      <ContactForm className={`${styles.item}`} />
      <ContactDetailsCard className={`${styles.item}`} />
      { isMobile ? null : <span className={`${styles.spacer_edge}`}></span> }
    </div>
  );
}


export default ContactWrapper;