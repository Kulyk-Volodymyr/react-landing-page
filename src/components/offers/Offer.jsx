import React from 'react';
import styles from './Offers.module.css';

function Offer(props) {
  return (
    <div class={styles.tabbyTab}>
        <input type="radio" id={props.id} name="tabby-tabs" checked></input>
        <label htmlFor={props.id}> {props.title} </label>
        <div class={styles.tabbyContent}>
            {props.description}
        </div>
    </div>
  )
}

export default Offer;