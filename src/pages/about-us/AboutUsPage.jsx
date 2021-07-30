import * as React from 'react';
import styles from './AboutUsPage.module.css';
import Menubar from '../../components/menu-bar/MenuBar';
import Footer from '../../components/footer/Footer';
import content_img from '../../static/images/aktravels_aboutus.jpg';

let AboutUsPage = (props) => {
  return (
    <div className={`${styles.container}`}>
      <Menubar className={`${styles.item}`} />
      <span style={{height: '20px'}}></span>
      <div className={`${styles.item} ${styles.banner_container}`} />
      <div className={`${styles.item}`} >
        <span className={`${styles.heading}`} >About Us</span>
      </div>
      <div className={`${styles.item} ${styles.container2}`} >
        <span className={`${styles.item2}`}>
          <p className={`${styles.content}`}>

The establishment of AK Travels is based on a way of thinking of exceptional client assistance. That crucial guideline is given to every representative through our one of a kind Customer-Driven preparing program. 

AK Travels has been serving the transportation business productively since 2000. AK Travels Chauffeured administration is one of the choice transportation specialist co-ops in Delhi and close by. Headquartered in New Delhi, we will likely offer perfect Rental Services around Delhi City and its encompassing zones. 

AK Travel's crucial to give the most secure and most solid transportation service to all Delhi zones, including Indira Gandhi International Airport, Hazrat Nizamuddin railroad station, New Delhi railroad station, and so forth 

We offer sumptuous Car and Bus/Traveler services for each occasion and event in the client's life. We have faith in making unique moments paramount, regardless of whether it be a club night, going to a vacation, heading out to wedding occasions, corporate travel gatherings, air terminal excursions, evenings out, single guy gatherings or whatever else on your voyaging list, customer fulfillment is our need. <br />
<br/>

OUR VISION 
<br />
To be the favored vehicle supplier with the top tier administrations and services.
<br/>
<br/>
QUALITY POLICY 
<br/>
By endeavoring to foresee and meet the changing needs of our clients, we intend to be the favored organization for customized, quality vehicle rentals. To accomplish this, we will guarantee all representatives and colleagues: 
<br/>
<ul>
<li>Continually improve our item quality, innovation, procedures, and administrations to meet the quality desires for our clients through setting up an intermittent survey of our quality goals </li>

<li>Commit to conveying top quality items and administrations to our clients with proficiency, consistency, and unwavering quality </li>

<li>Meet pertinent administrative necessities for our vehicle administrations </li>

<li>Undergo customary preparing and advancement to react to the ever-changing business condition</li>
</ul>
          </p>
        </span>
        <div className={`${styles.item2}`}>
          <img className={`${styles.content_img}`} src={content_img} />
        </div>
      </div>
      <Footer className={`${styles.item}`} />
    </div>
  );
}

  
export default AboutUsPage;