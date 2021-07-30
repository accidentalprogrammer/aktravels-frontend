import React from 'react';
import styles from './GmapLocation.module.css';
import Iframe from 'react-iframe'


let GmapLocation = (props) => {

  return (
    <div>
      <Iframe url="https://www.google.com/maps/embed/v1/place?key=AIzaSyAKcdsCf9fPRhNiC1w_KAUR-aAWfVQNtnY&q=A+K+TRAVELS+-+Hire+Innova+Car,+AC+Deluxe+Tempo+Traveller+on+Rent+Delhi+Noida+NCR"
        width="100%"
        height="450px"
        id="gmap_loc_iframe"
        display="initial"
        position="relative"
        allowFullScreen
      />
    </div>
  );
}

export default GmapLocation;