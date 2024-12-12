import React from 'react';
import * as styles from './footer.module.css';
import Seo from '../components/seo'

const Footer = () => (
  <footer className={styles.footer}>
    <p>&copy; 2024 Art by Anuya | Camilla Dahlström </p>
    <ul className={styles.footerLinks}>
         <li><a href="/contact">Contact</a></li>
    </ul>
  </footer>
);
export const Head = () =>  <Seo title=" Art by Anuya | Camilla Dahlström" />
export default Footer;
