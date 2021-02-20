import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to='/'>The Movie App</Link>
      <a href='https://github.com/guillermocorrea/movie-app'>
        Github repository
      </a>
    </footer>
  );
};

export default Footer;
