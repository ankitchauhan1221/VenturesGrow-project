import React, { useState } from 'react';
import logo from '../images/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const Navbar = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_mobile: '',
    user_email: '',
    user_service: 'Select Services',
  });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const onReCAPTCHAChange = (value) => {
    console.log('reCAPTCHA value:', value);
    // You can do something with the reCAPTCHA value here if needed
  };

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });


      if (response.ok) {
        console.log('Email sent successfully!');
        // Reset form fields after successful submission
        setFormData({
          user_name: '',
          user_mobile: '',
          user_email: '',
          user_service: '',
        });
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Email sent successfully!',
        });
        setShowForm(false);
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error scenarios here
    }
  };


  const handleFormHover = (isHovered) => {
    // handle hover if needed
  };

  return (
    <>
      <header className="navigation bg-tertiary main-header" >
        <nav className="navbar navbar-expand-xl navbar-light text-center">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="VenturesGrow" style={{ width: '150px', height: '80px' }} />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-6">
                {/* Your navigation links */}
                <li className="nav-item"><a className="nav-link" href="/" >Home</a></li>
                <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contactus">Contact Us</Link></li>
              </ul>
              <div
                className="btn btn-T ms-2 ms-lg-3 consult-btn"
                style={{ backgroundColor: '#4bb85e', color: 'white' }}
                onMouseEnter={openForm}
                onMouseLeave={() => handleFormHover(false)}
              >
                Consult Now
              </div>
            </div>
          </div>
        </nav>

        {/* Form */}
        {showForm && (
          <div className="consult-form">
            <h1 style={{ background: '#4bb85f', color: 'white', padding: '1rem', fontSize: '1.25rem', margin: '0px', backgroundClip: 'padding-box' }}>Talk to Expert</h1>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                {/* Your form inputs */}
                <div className="mb-2">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Name:*
                  </label>
                  <input
                    type="text"
                    id="recipient-name"
                    className="w-100"
                    name="user_name"
                    placeholder="Enter Name"
                    autoComplete="off"
                    value={formData.user_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="mobile" className="col-form-label">
                    Mobile:*
                  </label>
                  <div>
                    <input
                      type="text"
                      id="mobile"
                      className="w-100"
                      maxLength="10"
                      pattern="[0-9]*"
                      name="user_mobile"
                      placeholder="Enter Number"
                      autoComplete="off"
                      value={formData.user_mobile}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label htmlFor="email" className="col-form-label">
                    Email:*
                  </label>
                  <div>
                    <input
                      type="email"
                      id="email"
                      className="w-100"
                      name="user_email"
                      placeholder="Enter Email"
                      autoComplete="off"
                      value={formData.user_email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label htmlFor="message-text" className="col-form-label">
                    Message:*
                  </label>
                  <div>
                    <select
                      className="w-100 p-2"
                      name="user_service"
                      required=""
                      value={formData.user_service}
                      onChange={handleInputChange}
                    >
                      <option>Select Services</option>
                      <option>Social Media Marketing</option>
                      <option>Digital Marketing</option>
                      <option>SEO</option>
                      <option>Creative Work</option>
                    </select>
                  </div>
                </div>
                {/* Other form fields */}
                <div className="my-1 rounded text-center">
                  <div className="recaptcha">
                    <ReCAPTCHA
                      sitekey="6LcjA0gpAAAAAOqDlFM2BS08U0EhcSIb_qU3MQxD"
                      onChange={onReCAPTCHAChange}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-D"
                    style={{ background: 'red', color: 'white', marginRight: '10px' }}
                    onClick={closeForm}
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-T" style={{ background: '#4bb85f', color: 'white' }}>
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </header>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{width: '250px'}}>
        <div class="header">
          <span class="heading">
            <img loading="preload" decoding="async" class="img-fluid logo" width="120" src={logo} alt="logo"></img>
          </span>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="menu-link">
          <ul>
            <li><a aria-current="page" class="active" href="/">Home</a></li>
            <li><a class="" href="/about">About Us</a></li>
            <li><a class="" href="/services">Service</a></li>
            <li><a class="" href="/portfolio">Portfolio</a></li>
            <li><a class="" href="/contact">Contact Us</a></li>
            <li><a aria-current="page" class="btn  ms-2 ms-lg-3 consult-btn " href="#" style={{backgroundColor: '#4bb85e', color: 'wh'}} onClick={toggleForm}>Consult Now</a></li>
          </ul>
        </div>
        <div class="address-block">
              <ul>
                <li>
                <i class="fa-solid fa-location-dot" style={{width: '20px', height: '20px'}}></i>
                  <a aria-current="page" class="active" href="/">B-36, 2nd FloorSector-67, Noida  Uttar Pradesh - 201301</a>
                </li>
                <li>
                <i class="fa-solid fa-phone" style={{width: '20px', height: '20px'}}></i>
                  <a aria-current="page" class="active" href="/">+91 9654234208</a>
                </li>
              </ul>
            </div>
      </div>



      {/* <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="cart-panel">
          <div class="opacity"></div>
          <div class="cart-content">
            <div class="header">
              <span class="heading">
                <img loading="preload" decoding="async" class="img-fluid logo" width="120" src={logo} alt="logo"></img>
              </span>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            </div>
            <div class="offcanvas-body">
              <ul>
                <li><a aria-current="page" class="active" href="/">Home</a></li>
                <li><a class="" href="/about">About Us</a></li>
                <li><a class="" href="/services">Service</a></li>
                <li><a class="" href="/portfolio">Portfolio</a></li>
                <li><a class="" href="/contact">Contact Us</a></li>
                <li><a aria-current="page" class="btn btn-T ms-2 ms-lg-3 consult-btn active" href="/">Consult Now</a></li>
              </ul>
            </div>
            <div class="address-block">
              <ul>
                <li>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="yellow" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ color: 'yellow' }}>
                    <path d="M512.5 190.4l-94.4 191.3-211.2 30.7 152.8 149-36.1 210.3 188.9-99.3 188.9 99.2-36.1-210.3 152.8-148.9-211.2-30.7z"></path>
                    <path d="M908.6 352.8l-253.9-36.9L541.2 85.8c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L370.3 315.9l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1L239 839.4a31.95 31.95 0 0 0 46.4 33.7l227.1-119.4 227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM665.3 561.3l36.1 210.3-188.9-99.2-188.9 99.3 36.1-210.3-152.8-149 211.2-30.7 94.4-191.3 94.4 191.3 211.2 30.7-152.8 148.9z"></path>
                  </svg>
                  <a aria-current="page" class="active" href="/">513, Vishal Chamber Sector-18, Noida Uttar Pradesh - 201301</a>
                </li>
                <li>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="yellow" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ color: 'yellow' }}>
                    <path d="M512.5 190.4l-94.4 191.3-211.2 30.7 152.8 149-36.1 210.3 188.9-99.3 188.9 99.2-36.1-210.3 152.8-148.9-211.2-30.7z"></path>
                    <path d="M908.6 352.8l-253.9-36.9L541.2 85.8c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L370.3 315.9l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1L239 839.4a31.95 31.95 0 0 0 46.4 33.7l227.1-119.4 227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM665.3 561.3l36.1 210.3-188.9-99.2-188.9 99.3 36.1-210.3-152.8-149 211.2-30.7 94.4-191.3 94.4 191.3 211.2 30.7-152.8 148.9z"></path>
                  </svg>
                  <a aria-current="page" class="active" href="/">+91 9818137167</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}


    </>
  );
};

export default Navbar;

