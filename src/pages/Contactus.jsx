import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import your Bootstrap css
import 'bootstrap/dist/js/bootstrap.bundle.min.js';     // Import your bootstrap buldle(funcations)
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import  your fontstyle
import ReCAPTCHA from "react-google-recaptcha";
import Swal from 'sweetalert2';
import AOS from 'aos'; // For Animation


const Contactus = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_message: '',
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
            <section class="page-header contact-page">
                <div class="container">
                    <div class="row py-5">
                        <div class="col-8 mx-auto text-center">
                            <ul class="breadcrumbs" style={{ transform: 'translateY(130px)' }}>
                                <li class="list-inline-item"><a href="/" style={{ color: 'rgb(0, 0, 0)' }}>Home</a></li>
                                <li class="list-inline-item">Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* page-header end */}

            <section class="section" id="targetSection">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-lg-6">
                            <div class="section-title text-center">
                                <br />
                                <h1 class="text-black aos-init aos-animate" data-aos="fade-left">Let's get connected</h1>
                            </div>
                        </div>
                        <div class="col-lg-10">
                            <div class="shadow rounded p-5 bg-white">
                                <div class="row">
                                    <div class="col-md-12 mb-4 aos-init" data-aos="fade-right"><h4>Leave Us A Message</h4></div>
                                    <div class="col-lg-8 aos-init" data-aos="fade-up">
                                        <div class="contact-form">
                                            <form>
                                                <div class="form-group mb-4 pb-2">
                                                    <label for="contact_name" class="form-label">Full Name</label>
                                                    <input 
                                                    type="text" 
                                                    class="form-control shadow-none" 
                                                    id="contact_name" 
                                                    name="user_name" 
                                                    required="" autoComplete="off" 
                                                    value={formData.user_name}
                                                    onChange={handleInputChange} />
                                                </div>
                                                <div class="form-group mb-4 pb-2">
                                                    <label for="contact_email" class="form-label">Email address</label>
                                                    <input
                                                        type="email"
                                                        class="form-control shadow-none"
                                                        id="contact_email"
                                                        name="user_email"
                                                        required=""
                                                        autoComplete="off"
                                                        value={formData.user_email}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div class="form-group mb-4 pb-2">
                                                    <label for="user_message" class="form-label">Write Message</label>
                                                    <textarea 
                                                    class="form-control shadow-none" 
                                                    id="user_message" 
                                                    rows="3" 
                                                    name="user_message" 
                                                    required="" 
                                                    value={formData.user_message}
                                                    onChange={handleInputChange}>
                                                    </textarea>
                                                </div>
                                                <div class="mb-3 text-center">
                                                    <div class="recaptcha">
                                                        <div>
                                                            <div style={{ width: '304px', height: '78px' }}>
                                                                <div>

                                                                    <ReCAPTCHA
                                                                        sitekey="6Lfj9FIpAAAAAPX2YYGfBhJJzQ9Co259m8pEUIgQ"
                                                                        onChange={onReCAPTCHAChange}
                                                                    />,
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
                                                <button type="submit" class="btn-primary w-100" onClick={(e) => handleSubmit(e)}>Send Message</button>
                                            </form>
                                        </div>

                                    </div>
                                    <div class="col-lg-4 mt-5 mt-lg-0 aos-init" data-aos="fade-left">
                                        <div class="contact-info">
                                            <div class="block mt-0">
                                                <h4 class="h5">Still Have Questions?</h4>
                                                <div class="content">
                                                    Call Us We Will Be Happy To Help<br />
                                                    <a href="tel:+919654234208">+91 9654234208</a><br />
                                                    Monday - Saturday<br />
                                                    10:00 AM TO 06:00 PM IST
                                                </div>
                                            </div>
                                            <div class="block mt-4">
                                                <h4 class="h5">E-mail Us</h4>
                                                <div class="content"><a href="mailto:connect@venturesgrow.com">connect@venturesgrow.com</a></div>
                                            </div>
                                            <div class="block mt-4">
                                                <h4 class="h5">Meet Us</h4>
                                                <div class="content">
                                                    B-36, 2nd Floor<br />
                                                    Sector-67, Noida<br />
                                                    Uttar Pradesh - 201301
                                                </div>
                                            </div>
                                            <div class="block">
                                                <ul class="list-unstyled list-inline mt-2 mb-0 social-icons">
                                                    <li class="list-inline-item me-3">
                                                        <a class="text-black facebook text-decoration-none" target="_blank" rel="noreferrer" href="https://www.facebook.com/venturesgrow"><i class="fab fa-facebook-f text-decoration-none"></i></a>
                                                    </li>
                                                    <li class="list-inline-item me-3">
                                                        <a class="text-black twitter text-decoration-none" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/venturesgrow/"><i class="fa-brands fa-linkedin-in"></i></a>
                                                    </li>
                                                    <li class="list-inline-item me-3">
                                                        <a class="text-black instagram text-decoration-none" target="_blank" rel="noreferrer" href="https://www.instagram.com/venturesgrow_/"><i class="fab fa-instagram"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}

export default Contactus