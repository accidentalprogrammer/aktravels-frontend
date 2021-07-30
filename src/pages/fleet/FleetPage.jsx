import * as React from 'react';
import styles from './FleetPage.module.css';
import Menubar from '../../components/menu-bar/MenuBar';
import Footer from '../../components/footer/Footer';



let FleetPage = (props) => {
    return (
      <div className={`${styles.container}`}>
        <Menubar className={`${styles.item}`} />
        <span style={{height: '20px'}}></span>
        <Footer className={`${styles.item}`} />
      </div>
    );
}

    
  export default FleetPage;