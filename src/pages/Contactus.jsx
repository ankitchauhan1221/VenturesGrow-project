import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import your Bootstrap css
import 'bootstrap/dist/js/bootstrap.bundle.min.js';     // Import your bootstrap buldle(funcations)
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import  your fontstyle
import AOS from 'aos'; // For Animation





const Contactus = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
            // Global settings here (optional)
        });
    }, []);
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

            <section class="section">
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
                                <form action="">
                                    <div class="form-group mb-4 pb-2">
                                        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                        <input type="text" class="form-control shadow-none" id="contact_name" name="user_name" required="" autocomplete="off" value="" />
                                    </div>
                                    <div class="form-group mb-4 pb-2">
                                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                        <input type="email" class="form-control shadow-none" id="contact_email" name="user_email" required="" autocomplete="off" value="" />
                                    </div>
                                    <div class="form-group mb-4 pb-2">
                                        <label for="exampleFormControlTextarea1" class="form-label">Write Message</label>
                                        <textarea class="form-control shadow-none" id="exampleFormControlTextarea1" rows="3" name="user_message" required=""></textarea>
                                    </div>
                                    <div class="mb-3 text-center">
                                        <div class="recaptcha">
                                            <div>
                                                <div style={{ width: '304px', height: '78px' }}>
                                                    <div>
                                                        <iframe
                                                            title="reCAPTCHA"
                                                            width="304"
                                                            height="78"
                                                            role="presentation"
                                                            name="a-s9h1tcpukd0k"
                                                            frameborder="0"
                                                            scrolling="no"
                                                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                                            src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lfxz54nAAAAAAtOoMMN2AYP4bJNEHjekx0vb6Ro%20&amp;co=aHR0cHM6Ly9kbXRtZWRpYW1hcmtldGluZy5uZXRsaWZ5LmFwcDo0NDM.&amp;hl=en&amp;type=image&amp;v=u-xcq3POCWFlCr3x8_IPxgPu&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=xgv4bder8asl"
                                                        ></iframe>
                                                    </div>
                                                    <textarea
                                                        id="g-recaptcha-response"
                                                        name="g-recaptcha-response"
                                                        class="g-recaptcha-response"
                                                        style={{ width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none' }}
                                                        ></textarea>
                                                </div>
                                                <iframe style={{display: 'none'}}></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn-primary w-100">Send Message</button>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-4 mt-5 mt-lg-0 aos-init" data-aos="fade-left">
                            <div class="contact-info">
                                <div class="block mt-0">
                                    <h4 class="h5">Still Have Questions?</h4>
                                    <div class="content">
                                        Call Us We Will Be Happy To Help<br />
                                        <a href="tel:+919818137167">+91 9654234208</a><br />
                                        Monday - Saturday<br />
                                        10:00 AM TO 06:00 PM IST
                                    </div>
                                </div>
                                <div class="block mt-4">
                                    <h4 class="h5">E-mail Us</h4>
                                    <div class="content"><a href="mailto:contact@dmtgroup.in">connect@venturesgrow.com</a></div>
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
                                            <a class="text-black facebook text-decoration-none" target="_blank" rel="noreferrer" href="#"><i class="fab fa-facebook-f text-decoration-none"></i></a>
                                        </li>
                                        <li class="list-inline-item me-3">
                                            <a class="text-black twitter text-decoration-none" target="_blank" rel="noreferrer" href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                        </li>
                                        <li class="list-inline-item me-3">
                                            <a class="text-black instagram text-decoration-none" target="_blank" rel="noreferrer" href="#"><i class="fab fa-instagram"></i></a>
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