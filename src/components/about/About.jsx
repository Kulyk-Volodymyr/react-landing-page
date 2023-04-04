import React from 'react';
import styles from './About.module.css';
import AboutBg from '../../assets/pexels-pixabay-220436.jpg';

function About() {
  return (
    <section id='about' className={styles.about} 
    style={{ backgroundImage: `url(${AboutBg})` }}
    >
      <div className={styles.container}>

        <div className={styles.firstArticle}>
          <h1>Lorem Ipsum Dolor Sit Amet</h1>
          <p>Duis ultrices enim ac ligula pulvinar, ac fermentum velit interdum. Quisque ac ultrices 
            lorem. Suspendisse vitae nunc in dui euismod tincidunt. Nullam eget nisi pharetra, 
            dictum ligula sed, pretium lorem.
          </p>
          <p>Quisque risus eros, tempus eu odio at, consectetur elementum eros. Nullam feugiat 
            mauris a dolor efficitur rhoncus. Donec et dapibus ante. Aenean tincidunt ultricies 
            libero at molestie. Morbi eu ornare sem, eu pharetra lorem. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Nunc dapibus interdum blandit. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. In mattis est vitae fringilla convallis. Quisque a ex nulla.
          </p>
          <p><a href='https://www.pexels.com/uk-ua/photo/220436/' target='_blank'>Image from Pexels</a></p>
        </div>

        <div className={styles.secondArticle}>
          <div className={styles.adviceContainer}>
            <h2>Get Free Advice</h2>
            <p>Donec non tellus eu lorem molestie fringilla a sed velit. Curabitur in mattis lectus. 
              Duis risus nisi, semper non eleifend id, ultricies sed eros. Phasellus viverra, diam sit 
              amet volutpat ultricies, nunc augue sodales enim, et elementum elit ante vitae ex. Proin 
              ut tincidunt purus.
            </p>
          </div>
          <div className={styles.formContainer}>
            <form className={styles.form}>
              <div className={styles.formInput}>
                <label htmlFor='name'>Full Name:</label>
                <input name='name' placeholder='Enter full name...' type='text' />
              </div>
              <div className={styles.formInput}>
                <label htmlFor='email'>Email:</label>
                <input name='email' placeholder='Enter email...' type='email' />
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About;