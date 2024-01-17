import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import your Bootstrap css
import 'bootstrap/dist/js/bootstrap.bundle.min.js';     // Import your bootstrap buldle(funcations)
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import  your fontstyle
import jaypee from '../images/jaypee.00ba65dae76f53d8a01a.jpg';
import fabrica from '../images/fabrica.093470da66c18b30e50e.jpg';
import swabhiman from '../images/suarbhiman.a4acc19ef22fd61cb208.jpg';
import gs from '../images/download.jpeg';
import hmbk from '../images/hbmk.f29c7909af87263a93d9.jpg';
import pro6 from '../images/imgpsh_fullsize_anim (7).jpeg'
import eye from '../images/3rdeye.cc5512996d9177b5cf13.jpg';
import friskers from '../images/imgpsh_fullsize_anim (8).jpeg';
import ReCAPTCHA from 'react-google-recaptcha';
import AOS from 'aos'; // For Animation
import Swal from 'sweetalert2';


const Portfolio = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        user_name: '',
        user_mobile: '',
        user_email: '',
        user_service: 'Select Services',
    });

    useEffect(() => {
        AOS.init({
            duration: 2500,
        });
    }, []);

    const onReCAPTCHAChange = (value) => {
        console.log('reCAPTCHA value:', value);
        // You can do something with the reCAPTCHA value here if needed
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        
        // Perform form submission logic here
        console.log('Form Data:', formData);
        
        try {
            const response = await fetch('https://api.venturesgrow.com/send-mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                console.log('Email sent successfully');
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Email sent successfully!',
                  });
                // Add any additional logic upon successful submission
            } else {
                console.error('Failed to send email');
                // Handle the error, show an error message to the user, etc.
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle any unexpected errors
        }
    };
    
    

    return (
        <>
             <section class="page-header portfolio-page">
        <div class="container">
          <div class="row py-5">
            <div class="col-8 mx-auto text-center">
              <ul class="breadcrumbs" style={{ transform: 'translateY(130px)' }}>
                <li class="list-inline-item"><a href="/" style={{ color: 'rgb(0, 0, 0)' }}>Home</a></li>
                <li class="list-inline-item">Portfolio</li>
              </ul>
            </div>
          </div>
        </div>
             </section>
            
            {/* page header section end */}

            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h1 class="our-work-heading-portfolio">
                                <span style={{ color: 'rgb(16, 116, 190)' }}>OUR</span>
                                <span style={{ color: 'rgb(16, 116, 190)' }}>WORK</span>
                            </h1>
                            <p class="gap-5 d-flex justify-content-center">
                                <span><i class="fa-solid fa-handshake fa-xl" style={{ color: '#044577' }}></i></span>
                                <span><i class="fa-solid fa-hand-peace fa-xl" style={{ color: '#044577' }}></i></span>
                                <span><i class="fa-solid fa-thumbs-up fa-xl" style={{ color: '#044577' }}></i></span>
                            </p>
                            <p>VenturesGrow helps businesses to grow more digitally, From launching a new business to digitizing, streamlining or scaling an existing setup we believe our customized solutions will help you boost your Brand and increase Revenue. Our team of experts is skilled in developing unique and creative marketing solutions that capture attention and engage audiences. At VENTURES GROW, we work with our clients to develop a customized marketing strategy that balances different approaches to achieve your marketing objectives.</p>
                        </div>
                    </div>
                </div>
            </section>
            

            {/* portfolio section */}

            <section class="section bg-tertiary">
                <div class="container-fluid">
                    <div class="row gy-2 justify-content-around">
                        <div class="col-md-6 col-lg-3 col-6 port-main aos-init aos-animate" data-aos="fade-up" data-aos-duration="3000">
                            <div class="p-2 border border-dark text-center position-relative">
                                <img src={pro6} alt="Contentstudio" class="img-fluid" style={{ height: 'auto', width: 'auto' }} />
                                <div class="portfolio-card">
                                    <div class="content-portfolio">
                                        <h5 class="text-white mb-3 text-wrap">Content studio</h5>
                                        <button class="btn btn-primary text-dark bg-white"><a rel="noreferrer" href="https://contentstudio.co.in/" target="_blank" class="text-black">Visit</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 col-6 port-main aos-init aos-animate" data-aos="fade-up" data-aos-duration="3000">
                            <div class="p-2 border border-dark text-center position-relative">
                                <img src={friskers} alt="friskers shop" class="img-fluid" style={{ height: 'auto', width: 'auto' }} />
                                <div class="portfolio-card">
                                    <div class="content-portfolio">
                                        <h5 class="text-white mb-3 text-wrap">Friskers</h5>
                                        <button class="btn btn-primary text-dark bg-white"><a rel="noreferrer" href="https://friskers.in/" target="_blank" class="text-black">Visit</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 col-6 port-main aos-init aos-animate" data-aos="fade-up" data-aos-duration="3000">
                            <div class="p-2 border border-dark text-center position-relative">
                                <img src={jaypee} alt="jaypee Group" class="img-fluid" style={{ height: 'auto', width: 'auto' }} />
                                <div class="portfolio-card">
                                    <div class="content-portfolio">
                                        <h5 class="text-white mb-3 text-wrap">Jaypee Group</h5>
                                        <button class="btn btn-primary text-dark bg-white"><a rel="noreferrer" href="http://jalindia.com/" target="_blank" class="text-black">Visit</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 col-6 port-main aos-init aos-animate" data-aos="fade-up" data-aos-duration="3000">
                            <div class="p-2 border border-dark text-center position-relative">
                                <img src={swabhiman} alt="Swabhiman" class="img-fluid" style={{ height: 'auto', width: 'auto' }} />
                                <div class="portfolio-card">
                                    <div class="content-portfolio">
                                        <h5 class="text-white mb-3 text-wrap">Swabhiman</h5>
                                        <button class="btn btn-primary text-dark bg-white"><a rel="noreferrer" href="https://ihaats.com" target="_blank" class="text-black">Visit</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 col-6 port-main aos-init" data-aos="fade-up" data-aos-duration="3000">
                            <div class="p-2 border border-dark text-center position-relative">
                                <img src={fabrica} alt="Fabrica Furnishing" class="img-fluid" style={{ height: 'auto', width: 'auto' }} />
                                <div class="portfolio-card">
                                    <div class="content-portfolio">
                                        <h5 class="text-white mb-3 text-wrap">Fabrica Furnishing</h5>
                                        <button class="btn btn-primary text-dark bg-white"><a rel="noreferrer" href="https://www.fabricafurnishings.com" target="_blank" class="text-black">Visit</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 col-6 port-main aos-init" data-aos="fade-up" data-aos-duration="3000">
                            <div class="p-2 border border-dark text-center position-relative">
                                <img src={gs} alt="Gathbandhan Sarees" class="img-fluid" style={{ height: 'auto', width: 'auto' }} />
                                <div class="portfolio-card">
                                    <div class="content-portfolio">
                                        <h5 class="text-white mb-3 text-wrap">Gathbandhan Sarees</h5>
                                        <button class="btn btn-primary text-dark bg-white"><a rel="noreferrer" href="http://www.gathbandhansarees.com" target="_blank" class="text-black">Visit</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 col-6 port-main aos-init" data-aos="fade-up" data-aos-duration="3000">
                            <div class="p-2 border border-dark text-center position-relative">
                                <img src={hmbk} alt="H B M K" class="img-fluid" style={{ height: 'auto', width: 'auto' }} />
                                <div class="portfolio-card">
                                    <div class="content-portfolio">
                                        <h5 class="text-white mb-3 text-wrap">H B M K</h5>
                                        <button class="btn btn-primary text-dark bg-white"><a rel="noreferrer" href="https://hbmkretail.com/" target="_blank" class="text-black">Visit</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 col-6 port-main aos-init" data-aos="fade-up" data-aos-duration="3000">
                            <div class="p-2 border border-dark text-center position-relative">
                                <img src={eye} alt="3rd Eye Foundation" class="img-fluid" style={{ height: 'auto', width: 'auto' }} />
                                <div class="portfolio-card">
                                    <div class="content-portfolio">
                                        <h5 class="text-white mb-3 text-wrap">3rd Eye Foundation</h5>
                                        <button class="btn btn-primary text-dark bg-white"><a rel="noreferrer" href="https://3rdeyefoundation.org/" target="_blank" class="text-black">Visit</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section lets-connected-page">
                <div className="container">
                    <div className="col-12 aos-init aos-animate" data-aos="fade-left">
                        <h1 className="text-center text-white border-bottom lets-connected-heading mb-3">
                            Let's Connected
                        </h1>
                    </div>
                    <div
                        className="col-md-4 col-11 rounded border mx-auto backdropBg aos-init"
                        style={{ background: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(5px)' }}
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <form>
                            <div className="mb-2">
                                <label htmlFor="recipient-name" className="col-form-label text-black">
                                    Name:*
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        id="recipient-name"
                                        className="w-100 p-2 rounded shadow-md border-1"
                                        name="user_name"
                                        placeholder="Enter Name"
                                        autoComplete="off"
                                        value={formData.user_name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="mobile" className="col-form-label text-black">
                                    Mobile:*
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        id="mobile"
                                        className="w-100 p-2 rounded shadow-md border-1"
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
                                <label htmlFor="email" className="col-form-label text-black">
                                    Email:*
                                </label>
                                <div>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-100 p-2 rounded shadow-md border-1"
                                        name="user_email"
                                        placeholder="Enter Email"
                                        autoComplete="off"
                                        value={formData.user_email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="message-text" className="col-form-label text-black">
                                    Message:*
                                </label>
                                <div>
                                    <select
                                        className="w-100 p-3 shadow-md border-1 rounded"
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

                            <div class="my-2 rounded text-center">
                                <div class="recaptcha">
                                    <div>
                                        <div style={{ width: '304px', height: '78px' }}>
                                            <div>

                                                <ReCAPTCHA
                                                    sitekey="6Ld6TlMpAAAAANXRaJZSW1lFmGkZqcXjhDsD0UjZ"
                                                    onChange={onReCAPTCHAChange}
                                                />
                                            </div>
                                            <textarea
                                                id="g-recaptcha-response-4"
                                                name="g-recaptcha-response"
                                                class="g-recaptcha-response"
                                                style={{ width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none' }}
                                            ></textarea>
                                        </div>
                                        <iframe style={{ display: 'none' }}></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mb-2">
                            <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Send message</button>

                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
