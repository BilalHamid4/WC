import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 Print & Branding</p>
      <div className={styles.social}>
        {/* Social icons placeholders */}
        <span>FB</span> | <span>IG</span> | <span>TW</span>
      </div>
    </footer>
  );
};

export default Footer;
