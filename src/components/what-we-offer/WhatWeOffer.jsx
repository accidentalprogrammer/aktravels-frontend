import React from 'react';
import styles from './WhatWeOffer.module.css';
import icon1 from '../../static/images/offer_icon1.png';
import icon2 from '../../static/images/offer_icon2.png';
import icon3 from '../../static/images/offer_icon3.png';
import icon4 from '../../static/images/offer_icon4.png';
import icon5 from '../../static/images/offer_icon5.png';
import icon6 from '../../static/images/offer_icon6.png';


let WhatWeOffer = (props) => {

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.item}`}>
        <span className={`${styles.heading}`}>What We Offer</span>
      </div>
      <div className={`${styles.item} ${styles.container2}`}>
        <div className={`${styles.item2} ${styles.bg1} ${styles.zoom}`}>
          <div className={`${styles.container3}`} >
            <div className={`${styles.item3}`}>
              <img className={`${styles.icon}`} src={icon1} />
            </div>
            <div className={`${styles.item3}`}>
              <span className={`${styles.offer_text}`}>Events/delegation</span>
            </div>
          </div>
        </div>
        <div className={`${styles.item2} ${styles.bg2} ${styles.zoom}`}>
          <div className={`${styles.container3}`} >
            <div className={`${styles.item3}`}>
              <img className={`${styles.icon}`} src={icon2} />
            </div>
            <div className={`${styles.item3}`}>
              <span className={`${styles.offer_text}`}>Corporate</span>
            </div>
          </div>
        </div>
        <div className={`${styles.item2} ${styles.bg3} ${styles.zoom}`}>
          <div className={`${styles.container3}`} >
            <div className={`${styles.item3}`}>
            <img className={`${styles.icon}`} src={icon3} />
            </div>
            <div className={`${styles.item3}`}>
              <span className={`${styles.offer_text}`}>Employee Transportation</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.item}  ${styles.container2}`}>
        <div className={`${styles.item2} ${styles.bg4} ${styles.zoom}`}>
          <div className={`${styles.container3}`} >
            <div className={`${styles.item3}`}>
              <img className={`${styles.icon}`} src={icon4} />
            </div>
            <div className={`${styles.item3}`}>
              <span className={`${styles.offer_text}`}>Wedding</span>
            </div>
          </div>
        </div>
        <div className={`${styles.item2} ${styles.bg5} ${styles.zoom}`}>
          <div className={`${styles.container3}`} >
            <div className={`${styles.item3}`}>
              <img className={`${styles.icon}`} src={icon5} />
            </div>
            <div className={`${styles.item3}`}>
              <span className={`${styles.offer_text}`}>Self Drive</span>
            </div>
          </div>
        </div>
        <div className={`${styles.item2} ${styles.bg6} ${styles.zoom}`}>
          <div className={`${styles.container3}`} >
            <div className={`${styles.item3}`}>
              <img className={`${styles.icon}`} src={icon6} />
            </div>
            <div className={`${styles.item3}`}>
              <span className={`${styles.offer_text}`}>Hotel Travel Desk</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default WhatWeOffer;