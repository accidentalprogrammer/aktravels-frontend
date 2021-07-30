import * as React from 'react';
import styles from './HowItWorks.module.css';
import HiwIcon1 from '../../static/images/hiw-1.png';
import HiwIcon2 from '../../static/images/hiw-2.png';
import HiwIcon3 from '../../static/images/hiw-3.png';
import HiwIcon4 from '../../static/images/hiw-4.png';
import isMobile from 'react-device-detect';


let HowItWorks = (props) => {

  return (
    <div className={`${styles.container1}`}>
      <div className={`${styles.item1} ${styles.heading_container}`} >
        <span className={`${styles.heading1}`}>How It Works</span>
      </div>
      <div className={`${styles.item1} ${styles.container2}`} >
        { isMobile ? null : (<div className={`${styles.item2}`} ></div>) }
        <div className={`${styles.item2} ${styles.container3}`} >
          <div className={`${styles.item3}`}>
            <p className={`${styles.circle_border}`} >1</p>
          </div>
          <div className={`${styles.item3}`}>
            <img src={HiwIcon1} className={`${styles.zoom}`} />
          </div>
          <div className={`${styles.item3}`}>
            <span className={`${styles.heading2}`} >Book Your Car</span>
          </div>
          <div className={`${styles.item3}`}>
            <span className={`${styles.subhead2}`}>Our rental expert will confirm your booking.</span>
          </div>
        </div>
        <div className={`${styles.item2} ${styles.container3}`} >
          <div className={`${styles.item3}`}>
            <p className={`${styles.circle_border}`} >2</p>
          </div>
          <div className={`${styles.item3}`}>
            <img src={HiwIcon2} className={`${styles.zoom}`} />
          </div>
          <div className={`${styles.item3}`}>
            <span className={`${styles.heading2}`} >You Pick-up</span>
          </div>
          <div className={`${styles.item3}`}>
            <span className={`${styles.subhead2}`}>Your chauffeur will see you at your pick-up location</span>
          </div>
        </div>
        <div className={`${styles.item2} ${styles.container3}`} >
          <div className={`${styles.item3}`}>
            <p className={`${styles.circle_border}`} >3</p>
          </div>
          <div className={`${styles.item3}`}>
            <img src={HiwIcon3} className={`${styles.zoom}`} />
          </div>
          <div className={`${styles.item3}`}>
            <span className={`${styles.heading2}`} >Enjoy Your Ride</span>
          </div>
          <div className={`${styles.item3}`}>
            <span className={`${styles.subhead2}`}>Enjoy your journey with Professionally Trained Chauffeur</span>
          </div>
        </div>
        <div className={`${styles.item2} ${styles.container3}`} >
          <div className={`${styles.item3}`}>
            <p className={`${styles.circle_border}`} >4</p>
          </div>
          <div className={`${styles.item3}`}>
            <img src={HiwIcon4} className={`${styles.zoom}`} />
          </div>
          <div className={`${styles.item3}`}>
            <span className={`${styles.heading2}`} >Drop At Destination</span>
          </div>
          <div className={`${styles.item3}`}>
            <span className={`${styles.subhead2}`}>Our Chauffeur will drop you at your destination safely</span>
          </div>
        </div>
        { isMobile ? null : (<div className={`${styles.item2}`} ></div>) }
      </div>
    </div>
  );
}

export default HowItWorks;