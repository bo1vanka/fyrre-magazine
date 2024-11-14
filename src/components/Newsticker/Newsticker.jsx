import React from 'react';
import styles from './Newsticker.module.css';

const Newsticker = () => {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.marqueeText}>
        <div className={styles.firstText}>News Ticker+++ </div>
        
        
        
        <div className={styles.marqueeInfinite}>


          <div className={styles.marqueeContent}>
            <div className={styles.h2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</div>
            <div className={styles.h2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</div>
            <div className={styles.h2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</div>
            
            
          </div>


        </div>



      </div>
    </div>
  );
};

export default Newsticker;
