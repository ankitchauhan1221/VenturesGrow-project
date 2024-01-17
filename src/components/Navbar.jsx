import React, { useState ,useEffect} from 'react';
import logo from '../images/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import LoadingSpinner from './LoadingSpinner';



const Navbar = () => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
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
      const response = await fetch('https://api.venturesgrow.com/send-mail', {
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
  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) with setTimeout
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      setLoading(false);
    };
  
    fetchData();
  }, []);
  return (
    <div>
    {loading ?(
        <LoadingSpinner />
      ) : (
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
                      <option>Website Design & Development</option>
                      <option>Digital Marketing</option>
                      <option>Ecommerce Services</option>
                      <option>Creative Solutions</option>
                    </select>
                  </div>
                </div>
                {/* Other form fields */}
                <div className="my-1 rounded text-center">
                  <div className="recaptcha">
                    <ReCAPTCHA
                      sitekey="6Ld6TlMpAAAAANXRaJZSW1lFmGkZqcXjhDsD0UjZ"
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
            <li><Link class="" to="/about">About Us</Link></li>
            <li><Link class="" to="/services">Service</Link></li>
            <li>< Link class="" to="/portfolio">Portfolio</Link ></li>
            <li>< Link  class="" to="/contactus">Contact Us</Link></li>
            <li><a aria-current="page" class="btn  ms-2 ms-lg-3 consult-btn" style={{backgroundColor: '#4bb85e', color: 'wh'}} onClick={toggleForm}>Consult Now</a></li>
            
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
                  <a aria-current="page" class="active" to="/">+91 9654234208</a>
                </li>
              </ul>
            </div>
      </div>


    </>
      )}
      </div>
  );
};

export default Navbar;

