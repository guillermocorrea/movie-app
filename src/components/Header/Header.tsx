import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        <Link to='/'>The Movie App</Link>
      </h1>
    </div>
  );
};

export default Header;
