import React from 'react';
import styles from './Footer.module.css';
import PhoneIcon from '@material-ui/icons/Phone';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import { Divider } from '@material-ui/core';


let Footer = (props) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.container_1}`}>
        <span className={`${styles.spacer_edge}`} ></span>
        <div className={`${styles.item_group_1}`} >
          <div className={`${styles.item_group_1_1}`} >
            <p className={`${styles.footer_heading_1}`} >About AK Travels</p>
          </div>
          <div className={`${styles.item_group_1_1}`} >
            <Link className={`${styles.footer_link}`} to={routes.ABOUT_US} >About Us</Link>
          </div>
        </div>
        <div className={`${styles.item_group_1}`} >
          <div className={`${styles.item_group_1_1}`}>
            <p className={`${styles.footer_heading_1}`} >Policies</p>
          </div>
          <div className={`${styles.item_group_1_1}`} >
            <Link className={`${styles.footer_link}`} to={'#'} >Privacy Policy</Link>
          </div>
        </div>
        <div className={`${styles.item_group_1}`} >
          <div className={`${styles.item_group_1_1}`}>
            <p className={`${styles.footer_heading_1}`} >Packages</p>
          </div>
          <div className={`${styles.item_group_1_1}`} >
            <Link className={`${styles.footer_link}`} to={'#'} >Packge 1</Link>
          </div>
        </div>
        <div className={`${styles.item_group_1}`} >
          <div className={`${styles.item_group_1_1}`}>
            <p className={`${styles.footer_heading_1}`} >Contact Us</p>
          </div>
          <div className={`${styles.item_group_1_1}`} >
            <Link className={`${styles.footer_link}`} to={routes.CONTACT_US} >Contact Us</Link>
          </div>
          <div className={`${styles.item_group_1_1}`}>
            <PhoneIcon /> <a className={`${styles.telephone_link}`} href='tel:9999331155'>+91-9999331155</a>
          </div>
          <div className={`${styles.item_group_1_1}`}>
            <PhoneIcon /> <a className={`${styles.telephone_link}`} href='tel:9871129897'>+91-9871129897</a>
          </div>
        </div>
        <span className={`${styles.spacer_edge}`} ></span>
      </div>
      <Divider className={`${styles.divider}`} />
      <div className={`${styles.container_2}`}>
        <span className={`${styles.spacer_edge}`} ></span>
        <span className={`${styles.item_group_2}`} >
          <p>Copyright &copy 2020 A K Travels. All rights reserved</p>
        </span>
        <span className={`${styles.spacer}`} ></span>
        <span className={`${styles.spacer_edge}`} ></span>
      </div>
    </div>
  );
}

  
export default Footer;