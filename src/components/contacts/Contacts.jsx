import React from 'react';
import styles from './Contacts.module.css';
import ContactsBg from '../../assets/pexels-david-bartus-610293.jpg';

function Contacts() {
  return (
    <section id='contacts' className={styles.contacts} 
    style={{ backgroundImage: `url(${ContactsBg})` }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Contact Us</h1>
          <form className={styles.form}>
            <label htmlFor='name'>Full Name:</label>
            <input name='name' placeholder='Enter full name...' type='text' />
            <label htmlFor='email'>Email:</label>
            <input name='email' placeholder='Enter email...' type='email' />
            <label htmlFor='message'>Message:</label>
            <textarea placeholder='Enter message...' name='message'></textarea>
            <button type='submit'>Send Message</button>
          </form>
          <p><a href='https://www.pexels.com/uk-ua/photo/610293/' target='_blank'>Image from Pexels</a></p>
        </div>
      </div>
    </section>
  )
}

export default Contacts;