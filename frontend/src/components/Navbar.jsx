import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <h1>Print & Branding</h1>
      <div className={open ? `${styles.navLinks} ${styles.open}` : styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <div>
          <span onClick={() => setOpen(!open)}>Products ▼</span>
          {open && (
            <div>
              <Link to="/products/flyers">Flyers</Link>
              <Link to="/products/business-cards">Business Cards</Link>
              <Link to="/products/posters">Posters</Link>
            </div>
          )}
        </div>
        <Link to="/contact">Contact</Link>
      </div>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
