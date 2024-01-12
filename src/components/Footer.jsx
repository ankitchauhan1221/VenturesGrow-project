import React from 'react';
import './Footer.module.css'; // Import your Footer CSS
import logopng from '../images/Venturesgrow-LOGO3736__1_-removebg-preview.png'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
 <>   
  <footer class="bg-tertiary py-5">
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-lg-4 col-md-12 newsletter-form">
        <div style={{backgroundColor: 'rgb(244, 244, 244)', padding: '30px'}}>
          <a class="d-block mb-4" href="/">
          <img src={logopng} alt="Your Image"  style={{width: '150px', height: '80px'}}/></a>
          <p class="mb-0">We help companies grow their businesses digitally. Our unique combination of strategic thinking, marketing expertise, operational know-how, digital transformation capabilities, and advanced analytics sets us apart.</p>
        </div>
      </div>
      <div class="col-lg-2 col-md-4 col-6 mb-4">
        <div class="footer-widget">
          <h5 class="mb-4 text-primary font-secondary">Quick Links</h5>
          <ul class="list-unstyled">
          <li className="nav-item mb-2"><Link className="nav-link text-dark text-decoration-none" to="/about">About Us</Link></li>
            <li class="mb-2"><Link class="text-dark text-decoration-none" to="/services">Services</Link></li>
            <li class="mb-2"><Link class="text-dark text-decoration-none" to="/portfolio">Portfolio</Link></li>
            <li class="mb-2"><Link class="text-dark text-decoration-none" to="/Career">Career</Link></li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-6 mb-4">
        <div class="footer-widget">
          <h5 class="mb-4 text-primary font-secondary">Services</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a class="text-dark text-decoration-none" href="services">Search Engine Optimization</a></li>
            <li class="mb-2"><a class="text-dark text-decoration-none" href="services">Social Media Marketing</a></li>
            <li class="mb-2"><a class="text-dark text-decoration-none" href="services">Digital Marketing</a></li>
            <li class="mb-2"><a class="text-dark text-decoration-none" href="services">Creative Work</a></li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 mb-4">
        <div class="footer-widget">
          <h5 class="mb-4 text-primary font-secondary">Help</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a class="text-dark text-decoration-none" href="contactus">Contact Us</a></li>
            <li class="mb-2 "><a class="text-dark text-decoration-none" href="#">Follow Us</a></li>
          </ul>
          <ul class="list-unstyled list-inline mb-0 social-icons text-decoration-none">
            <li class="list-inline-item me-3"><a class="text-black facebook text-decoration-none" target="_blank" rel="noreferrer" href="#"><i class="fab fa-facebook-f" style={{ backgroundColor: 'initial', transition: 'background-color 0.3s ease' }}></i></a></li>
            <li class="list-inline-item me-3"><a class="text-black twitter text-decoration-none" target="_blank" rel="noreferrer" href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
            <li class="list-inline-item me-3"><a class="text-black instagram text-decoration-none" target="_blank" rel="noreferrer" href="#"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
    <div class="row align-items-center mt-5 text-center text-md-start">
      <div class="col-lg-7 col-md-6 mt-4 mt-lg-0">© 2024 VenturesGrow Pvt Ltd. All Rights Reserved.</div>
      <div class="col-lg-5 col-md-6 text-md-end mt-4 mt-md-0">
        <ul class="list-unstyled list-inline mb-0">
          <li class="list-inline-item me-4"><a class="text-dark text-decoration-none" href="#">Privacy Policy</a></li>
          <li class="list-inline-item me-4"><a class="text-dark text-decoration-none" href="#">Terms &amp; Conditions</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer></>

  );
};

export default Footer;
