import React, {useState} from 'react';
import styles from './Questions.module.css';

function Question(props) {
  const [answerIsOpen, setAnswerIsOpen] = useState(props.isOpen);
  return (
    <div className={styles.questionCaontainer}>
        <div className={styles.question} onClick={() => setAnswerIsOpen(!answerIsOpen)}>
            <div className={styles.quest}>
              <h4>{props.question}</h4>
              <span className={answerIsOpen ? styles.arrowUp : styles.arrowDown}>&#10140;</span>
            </div>
        </div>
        <div className={answerIsOpen ? styles.answerVisible : styles.answerHidden}>
            <p>{props.answer}</p>
        </div>
    </div>
  )
}

export default Question;