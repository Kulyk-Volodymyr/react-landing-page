import React from 'react';
import styles from './Banner.module.css';
import BannerBg from '../../assets/pexels-napakorn-saksuk-787035.jpg';

function Banner() {
  return (
    <section id='banner' className={styles.banner} 
    style={{ backgroundImage: `url(${BannerBg})` }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Lorem Ipsum Dolor Sit Amet</h1>
          <p>Quisque risus eros, tempus eu odio at, consectetur elementum eros. Nullam feugiat 
            mauris a dolor efficitur rhoncus. Donec et dapibus ante. Aenean tincidunt ultricies 
            libero at molestie. Morbi eu ornare sem, eu pharetra lorem. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Nunc dapibus interdum blandit. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. In mattis est vitae fringilla convallis. Quisque a ex nulla.
          </p>
          <p><a href='https://www.pexels.com/uk-ua/photo/787035/' target='_blank'>Image from Pexels</a></p>
        </div>
      </div>
    </section>
  )
}

export default Banner;