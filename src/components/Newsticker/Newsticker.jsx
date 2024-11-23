import React from 'react';
import styles from './Newsticker.module.css'; // Используем CSS-модули

const Newsticker = () => {
  return (
    <div className={styles.body1}>
      <section className={styles.section1}>
        <p className={styles.ticker}>NEWS TICKER+++</p>
        <div className={styles.content}>
          <div className={styles.div1}>
          &nbsp;&nbsp; &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit +++ &nbsp; &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit +++ &nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur  
          </div>
          <div className={styles.div2}>
          adipiscing elit +++&nbsp;&nbsp; &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit +++ &nbsp; &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit +++ &nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsticker;
