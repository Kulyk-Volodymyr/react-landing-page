import React, {useState} from 'react';
import styles from './Header.module.css';

function Header() {
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >=50) {
      setNav(true);
    } else {
      setNav(false);
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <header>
      <nav className={nav ? styles.nav + ' ' + styles.navActive : styles.nav}>
        <h3><a href='#banner'>LOGO</a></h3>
        <input type='checkbox' className={styles.menuBtn} id='menu-btn'/>
        <label className={styles.menuIcon} htmlFor='menu-btn'>
          <span className={styles.navIcon}></span>
        </label>
        <ul className={styles.menu}>
          <li><a href='#offers'>Offers</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#team'>Team</a></li>
          <li><a href='#questions'>Questions</a></li>
          <li><a href='#contacts'>Contacts</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;

//<nav className={nav ? 'nav active' : 'nav'}></nav>