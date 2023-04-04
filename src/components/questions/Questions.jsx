import React from 'react';
import styles from './Questions.module.css';
import Question from './Question';
import {QUESTIONS} from '../../data/DATA';

function Questions() {
  return (
    <section id='questions' className={styles.questions}>
      <h1>Frequently Asked Questions</h1>
      <div className={styles.container}>
        {QUESTIONS.map((quest, key) => {
          return (
            <Question 
              key={key} 
              question={quest.question} 
              answer={quest.answer} 
              isOpen={quest.isOpen}
            />
          );
        })}
        </div>
    </section>
  )
}

export default Questions;