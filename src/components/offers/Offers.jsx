import React from 'react';
import styles from './Offers.module.css';
import Offer from './Offer';
import {OFFERS} from '../../data/DATA';

function Offers() {
  return (
    <section id='offers' className={styles.offers}>
      <h1>Our Offers</h1>
      <div className={styles.container}>
        {OFFERS.map((offer, key) => {
          return (
            <Offer 
              key={key} 
              title={offer.title} 
              description={offer.description} 
              id={offer.id}
              checked={offer.checked}
            />
          );
        })}
      </div>
    </section>
  )
}

export default Offers;