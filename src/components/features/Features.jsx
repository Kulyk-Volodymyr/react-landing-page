import React from 'react';
import styles from './Features.module.css';
import Feature from './Feature';
import {FEATURES} from '../../data/DATA';

function Features() {
  return (
    <section id='features' className={styles.features}>
      {FEATURES.map((feature, key) => {
          return (
            <Feature 
              key={key} 
              feature={feature.feature} 
              description={feature.description}
            />
          );
        })}
    </section>
  )
}

export default Features;