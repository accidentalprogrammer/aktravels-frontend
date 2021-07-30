import React from 'react';
import styles from './ContactDetailsCard.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      backgroundColor: '#000',
    },
  }
}));

let ContactDetailsCard = (props) => {
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${styles.outer_container}`} >
      <Paper square className={`${styles.container}`} elevation={4}>
        <div className={`${styles.item}`}>
          <span className={`${styles.heading}`}>Contact Us</span>
        </div>
        <div className={`${styles.item}`}>
          <RoomIcon className={`${styles.pin_icon}`} />
          <span className={`${styles.address}`} >C-51, Ground Floor, <br />Shashi Garden, Mayur Vihar, <br />New Delhi, Delhi 110091</span>
        </div>
        <div className={`${styles.item}`}>
          <PhoneIcon className={`${styles.phone_icon}`} />
          <a className={`${styles.phone_number}`} href='tel:9999331155' >+91 9999331155</a>
        </div>
        <div className={`${styles.item}`}>
          <PhoneIcon className={`${styles.phone_icon}`} />
          <a className={`${styles.phone_number}`} href='tel:9871129897' >+91 9871129897</a>
        </div>
        <div className={`${styles.item}`}>
          <MailIcon className={`${styles.mail_icon}`} />
          <a className={`${styles.mail_id}`} href='mailto:transport@aktravel.in' >transport@aktravel.in</a>
        </div>
        <div className={`${styles.item}`}>
          <span className={`${styles.heading2}`}>follow us on</span>
        </div>
        <div className={`${styles.item}`}>
          <FacebookIcon className={`${styles.social_icon}`} />
          <TwitterIcon className={`${styles.social_icon}`} />
          <InstagramIcon className={`${styles.social_icon}`} />
        </div>
        <div className={`${styles.item}`}><span>  </span></div>
      </Paper>
    </div>
  );
}

export default ContactDetailsCard;