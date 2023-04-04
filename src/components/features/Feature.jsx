import React from 'react';
import styles from './Features.module.css';

function Feature(props) {
  return (
    <div className={styles.feature}>
        <h2> {props.feature} </h2>
        <p> {props.description} </p>
    </div>
  )
}

export default Feature;