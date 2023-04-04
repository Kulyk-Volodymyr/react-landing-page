import React from 'react';
import styles from './Team.module.css';

function Person(props) {
  return (
    <div className={styles.personContainer}>
      <div className={styles.imgContainer}>
        <img src={props.photo} alt='Photo' target='_blank' />
      </div>
      <div className={styles.personInfo}>
        <h3>{props.name}</h3>
        <h4>{props.position}</h4>
        <p><a href={props.link}>Image by nakaridore on Freepik</a></p>
      </div>
    </div>
  )
}

export default Person;