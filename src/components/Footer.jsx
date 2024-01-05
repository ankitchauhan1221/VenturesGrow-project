import React from 'react';
import styles from'./Footer.module.css'; // Import your Footer CSS
import logo from '../images/logo.jpg';   // Import your image

const Footer = () => {
  return (
    <footer className={styles.footerMain}>
      <div className={styles.footercontainer}>
        <div className={styles.row}>
          <div className={styles.col1}>
            <div className={styles.section1}>
              <a className="d-block mb-4" href="/">
                <img src={logo} alt="Your Image"  style={{width: '150px', height: '80px', marginLeft: '15px'}}/>
              </a>
              <p className="mb-0" style={{marginRight: '65px'}}>
                We help companies to grow their businesses digitally. The unique combination of strategic thinking
                marketing expertise operational know-how digital transformation capabilities and advanced analytics.
              </p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.section1}>
              <h5 className="mb-4 text-primary font-secondary footer_heading">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a className="footer_links" href="/about" style={{ color: 'black', textDecoration: 'none' }}>About Us</a>
                </li>
                <li className="mb-2">
                  <a className="footer_links" href="/services" style={{ color: 'black', textDecoration: 'none' }}>Services</a>
                </li>
                <li className="mb-2">
                  <a className="footer_links" href="/portfolio" style={{ color: 'black', textDecoration: 'none' }}>Portfolio</a>
                </li>
                <li className="mb-2">
                  <a className="footer_links" href="/contact" style={{ color: 'black', textDecoration: 'none' }}>Contact Us</a>
                </li>
              </ul>
            </div>


          </div>
          <div className={styles.col}>
            <div className={styles.section1}>
              <h5 className="mb-4 text-primary font-secondary footer_heading">Service</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a className="footer_links" href="/services" style={{ color: 'black', textDecoration: 'none'}}>Search Engine Optimization</a>
                </li>
                <li className="mb-2">
                  <a className="footer_links" href="/services" style={{ color: 'black', textDecoration: 'none'}}>Social Media Marketing</a>
                </li>
                <li className="mb-2">
                  <a className="footer_links" href="/services" style={{ color: 'black', textDecoration: 'none'}}>Digital Marketing</a>
                </li>
                <li className="mb-2">
                  <a className="footer_links" href="/services" style={{ color: 'black', textDecoration: 'none'}}>Creative Work</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.col}>
            <div className="footer_tittle" style={{marginBottom: '40px'}}>
              <h5 className="mb-4 text-primary font-secondary footer_heading">Help</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a className="footer_links" href="/contact" style={{ color: 'black', textDecoration: 'none' }}>Contact Us</a>
                </li>
                <li className="mb-2">
                  <a className="footer_links" href="/" style={{ color: 'black', textDecoration: 'none' }}>Follow Us</a>
                </li>
              </ul>
              <ul className="list-unstyled list-inline mb-0 socials-icons">
                <li className="list-inline-item me-3">
                  <a className="text-black facebook social_links" target="_blank" rel="noreferrer" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item me-3">
                  <a className="text-black facebook social_links" target="_blank" rel="noreferrer" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item me-3">
                  <a className="text-black-facebook social_links" target="_blank" rel="noreferrer" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="row align-items-center mt-5 text-center text-md-start bottom_footer">
          <div className="col-lg-7 col-md-6 mt-4 mt-lg-0">
            ©️ Copyright 2024 Venturesgrow All Rights Reserved Copyright
          </div>
          <div className="col-lg-5 col-md-6 text-md-end mt-4 mt-md-0">
            <ul className="list-unstyled list-inline mb-0">
              <li className="list-inline-item me-4">
                <a className="text-black" href="/privacy" style={{ color: 'black', textDecoration: 'none' }}>Privacy Policy</a>
              </li>
              <li className="list-inline-item me-4">
                <a className="text-black" href="/termscondition" style={{ color: 'black', textDecoration: 'none' }}>Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
