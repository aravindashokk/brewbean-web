import React from 'react';

const Footer = () => (
  <footer className="footer sm:footer-horizontal footer-center bg-base-200 text-base-content p-3 fixed bottom-0">
    <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
  </footer>
);

export default Footer;
