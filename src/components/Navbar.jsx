import React from 'react';
import logo from '../images/logo.jpg'; // Import your logo image
import 'bootstrap/dist/css/bootstrap.min.css'; // Import your Bootstrap CSS
const Navbar = () => {
  

  return (
    <><header class="navigation bg-tertiary main-header" style={{ position: 'sticky', top: '0', zIndex: '100', backgroundColor: 'white' }}>
      <nav class="navbar navbar-expand-xl navbar-light text-center" style={{ padding: '8px 16px' }}>
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src={logo} alt="Your Image" style={{ width: '150px', height: '80px' }} /></a>
          <button class="navbar-toggler">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item"><a class="nav-link" href="/" style={{ color: 'black', fontSize: '20px' }}>Home</a></li>
              <li class="nav-item"><a class="nav-link" href="/about" style={{ color: 'black', fontSize: '20px' }}>About Us</a></li>
              <li class="nav-item"><a class="nav-link" href="/services" style={{ color: 'black', fontSize: '20px' }}>Services</a></li>
              <li class="nav-item"><a class="nav-link" href="/portfolio" style={{ color: 'black', fontSize: '20px' }}>Portfolio</a></li>
              <li class="nav-item"><a class="nav-link" href="/contact" style={{ color: 'black', fontSize: '20px' }}>Contact Us</a></li>
            </ul>
            <a class="btn btn-T ms-2 ms-lg-3 consult-btn" href="/" style={{ backgroundColor: '#4bb85e', color: 'white' }}>Consult Now</a>
          </div>
        </div>
      </nav>
      
      

    </header>
      {/* // Form  start Here// */}
      <div className="consult-form" style={{width: '338px', height: '567'}}>
        <div className="modal-dialog">
          <div className="modal-content" style={{width: '338px', height: '567'}}>
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-white" id="exampleModalLabel" style={{ font: 'bold' }}>Talk to Expert</h1>
            </div>
            <div className="modal-body">
              <form style={{color: 'gray'}}>
                <div className="mb-2">
                  <label htmlFor="recipient-name" className="col-form-label">Name:*</label>
                  <div><input type="text" id="recipient-name" className="w-100" name="user_name" placeholder="Enter Name" autoComplete="off" value="" /></div>
                </div>
                <div className="mb-2">
                  <label htmlFor="mobile" className="col-form-label">Mobile:*</label>
                  <div><input type="text" id="mobile" className="w-100" maxLength="10" pattern="[0-9]*" name="user_mobile" placeholder="Enter Number" autoComplete="off" value="" /></div>
                </div>
                <div className="mb-2">
                  <label htmlFor="email" className="col-form-label">Email:*</label>
                  <div><input type="email" id="email" className="w-100" name="user_email" placeholder="Enter Email" autoComplete="off" value="" /></div>
                </div>
                <div className="mb-2">
                  <label htmlFor="message-text" className="col-form-label">Message:*</label>
                  <div>
                    <select className="w-100 p-2" name="user_service" required="">
                      <option>Select Services</option>
                      <option>Social Media Marketing</option>
                      <option>Digital Marketing</option>
                      <option>SEO</option>
                      <option>Creative Work</option>
                    </select>
                  </div>
                </div>
                <div className="my-1 rounded text-center">
                  {/* reCAPTCHA section */}
                  <div class="recaptcha">
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-D" style={{ background: 'red', color: 'white', marginRight: '10px', font: 'bold' }}>Close</button>
                  <button type="button" className="btn btn-T" style={{ background: '#4bb85f', color: 'white' }}>Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};
export default Navbar;
