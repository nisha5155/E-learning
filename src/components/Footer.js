import React from 'react';
import './Footer.css'


const Footer = () => {
  return (
    <footer className="footer-page">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-heading">Get in Touch</h2>
          <p className="footer-text"><b>PLEASE REGISTER TO CONTINUE</b><br/></p>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Contact Us</h2>
          <ul className="footer-list">
            <li className="footer-list-item">
              <i className="fas fa-map-marker-alt footer-icon"></i>
              <p className="footer-item-text">Kolkata, West Bengal, 700152</p>
            </li>
            <li className="footer-list-item">
              <i className="fas fa-phone-alt footer-icon"></i>
              <p className="footer-item-text">(+91) 8709402057</p>
            </li>
            <li className="footer-list-item">
              <i className="fas fa-envelope footer-icon"></i>
              <p className="footer-item-text"><a href="mailto:nishabharti2641@gmail.com">nishabharti2641@gmail.com</a></p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
