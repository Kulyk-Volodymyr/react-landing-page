import React from 'react';
import styles from './Team.module.css';
import Person from './Person';
import {TEAM} from '../../data/DATA';

function Team() {
  return (
    <section id='team' className={styles.team}>
      <h1>Our Amazing Team</h1>
      <div className={styles.persons}>
        {TEAM.map((team, key) => {
          return (
            <Person 
              key={key} 
              photo={team.photo} 
              name={team.name} 
              position={team.position} 
              link={team.photoLink}
            />
          );
        })}
      </div>
    </section>
  )
}

export default Team;