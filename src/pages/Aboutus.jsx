import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import your Bootstrap css
import 'bootstrap/dist/js/bootstrap.bundle.min.js';     // Import your bootstrap buldle(funcations)
import AOS from 'aos'; // For Animation
import aboutimg from '../images/4983463.jpg'
import Founderimg from '../images/imgpsh_fullsize_anim (4).jpeg'
import linkedin from '../images/linkedin.png'
import dineshrana from '../images/imgpsh_fullsize_anim (6).jpeg'
import AnamikaDhyani from '../images/imgpsh_fullsize_anim (5).jpeg'

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      // Global settings here (optional)
    });
  }, []);
  return (
    <>
      <section class="page-header">
        <div class="container">
          <div class="row py-5">
            <div class="col-8 mx-auto text-center">
              <ul class="breadcrumbs" style={{ transform: 'translateY(130px)' }}>
                <li class="list-inline-item"><a href="/" style={{ color: 'rgb(0, 0, 0)' }}>Home</a></li>
                <li class="list-inline-item">About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* //-- End Page Header Section --> */}
      <section class="section bg-tertiary">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-6 about-bg-img aos-init aos-animate" data-aos="fade-right">
              <img src={aboutimg} alt="about-img" />
            </div>
            <div class="col-lg-6 col-md-6 aos-init aos-animate" data-aos="fade-left">
              <h1 style={{ color: 'rgb(16, 116, 190)', fontSize: '44px' }}>About Us</h1>
              <p>
                We are committed to advancing the communications industry through cutting-edge analytics, uniquely creative and impactful creations, and strategic direction. Our focus lies in satisfying our clients and delivering the highest quality standards. With a strong portfolio of highly satisfied clientele, we consistently drive innovation across industry verticals. Customer satisfaction is our primary goal, and our mission is to build long-lasting relationships with our clients. We continually learn and improve to deliver quality work.
              </p>
              <h5 data-aos="fade-up" class="aos-init" style={{ fontWeight: '700' }}>Our Core Values:</h5>
              <div class="about-part">
                <div class="row gy-1">
                  <div class="col-md-4 col-6 aos-init" data-aos="fade-up">
                    <div class="about-part-main-icon">
                      <div class="about-part-icon">
                        <i class="fa-brands fa-medapps"></i>
                      </div>
                      <div class="about-part-icon-content">
                        <p class="text-nowrap">Innovation</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-6 aos-init" data-aos="fade-up">
                    <div class="about-part-main-icon">
                      <div class="about-part-icon">
                        <i class="fa-solid fa-users"></i>
                      </div>
                      <div class="about-part-icon-content">
                        <p class="text-nowrap">Leadership</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-6 aos-init" data-aos="fade-up">
                    <div class="about-part-main-icon">
                      <div class="about-part-icon">
                        <i class="fa-solid fa-handshake-angle"></i>
                      </div>
                      <div class="about-part-icon-content">
                        <p class="text-nowrap">Integrity</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-6 aos-init" data-aos="fade-up">
                    <div class="about-part-main-icon">
                      <div class="about-part-icon">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <div class="about-part-icon-content">
                        <p class="text-nowrap">Trust</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-6 aos-init" data-aos="fade-up">
                    <div class="about-part-main-icon">
                      <div class="about-part-icon">
                        <i class="fa-solid fa-people-group"></i>
                      </div>
                      <div class="about-part-icon-content">
                        <p class="text-nowrap">Team Work</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-6 aos-init" data-aos="fade-up">
                    <div class="about-part-main-icon">
                      <div class="about-part-icon">
                        <i class="fa-brands fa-teamspeak"></i>
                      </div>
                      <div class="about-part-icon-content">
                        <p class="text-nowrap">Support</p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Add similar divs for other core values --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  OUR PHILOSOPHY */}

      <section class="section">
        <div class="container">
          <div class="row bg-tertiary">
            <div class="col-12 text-center">
              <h1 data-aos="fade-right" class="aos-init" style={{ color: 'rgb(249, 170, 41)' }}>OUR PHILOSOPHY</h1>
            </div>
            <div class="col-12 aos-init" data-aos="fade-left">
              <p class="mission-para">
                Our vision reflects what we are striving to achieve - our mission highlights the ways we want to achieve it. These two core elements of our corporate strategy depend on our organization's Passion, Integrity, Commitment, and Reliability.
              </p>
            </div>
          </div>
          <div class="row mission-card-section gy-3">
            <div class="col-md-4 aos-init" data-aos="fade-up">
              <div class="mission-card">
                <div class="main-card">
                  <div class="our">OUR MISSION</div>
                  <div class="icon-mission">
                    <i class="fa-solid fa-hourglass-half"></i>
                  </div>
                </div>
                <hr />
                <p>
                  Our mission is to help businesses to grow more digitally stay ahead of the curve and succeed in an ever-changing digital world. Our core values guide everything we do — Employees, Customer Service, Innovation, Integrity, Fun, and Profitability. The objective is to create profitable businesses which would generate long-term value for all its stakeholders.
                </p>
              </div>
            </div>
            <div class="col-md-4 aos-init" data-aos="fade-down">
              <div class="mission-card">
                <div class="main-card">
                  <div class="our">OUR COMMITMENTS</div>
                  <div class="icon-mission">
                    <i class="fa-solid fa-hands-praying"></i>
                  </div>
                </div>
                <hr />
                <p>
                  DMT MEDIA & MARKETING PRIVATE LIMITED believes that Client satisfaction is of utmost significance. To continue delivering value that exceeds customer expectations and keep delighting them in the digital space. We make sure to learn something new to rectify previous errors to deliver quality work to our customers We are still in touch with our first client long-lasting relationship with our clients is our top most precedence.
                </p>
              </div>
            </div>

            <div class="col-md-4 aos-init" data-aos="fade-up">
              <div class="mission-card">
                <div class="main-card">
                  <div class="our">OUR VISION</div>
                  <div class="icon-mission" >
                    <i class="fa-solid fa-hand-back-fist"></i>
                  </div>
                </div>
                <hr />
                <p>
                  Our vision is to become a leading Technology provider of end-to-end managed IT services to businesses and use the knowledge and expertise acquired over years to incubate businesses in the next generation of Technology & Digital Communication. To become a growth-driven topmost provider of 360-degree solution company every day of the year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About leaders Sections */}

      <section class="section">
        <div class="container">
          <div class="row justify-content-around gy-5 d-flex align-items-center" style={{ backgroundColor: 'rgb(244, 244, 244)', padding: '30px' }}>
            <div class="col-md-4 mb-4 aos-init" data-aos="fade-right">
              <div class="about-director-image">
                <img src={Founderimg} alt="founderimg" class="zoom-image"></img>
              </div>
            </div>

            <div class="col-md-11 aos-init" data-aos="fade-left">
              <div class="director-content">
                <h1 class="text-center" style={{ color: 'rgb(16, 116, 190)' }}>Founder Message</h1>
                <p>
                  I believe that working together is a beginning, progress, and success; Our passion is to empower people to have a voice, belonging, and a purpose. It provides freedom to be creative and productive. It lets people learn about things they didn’t think they could learn before, and so in a sense it's all about bringing potential out.
                </p>
                <span class="text-dark">  Connect me :  </span>
                <span>
                  <img src={linkedin} alt="linkedinprofile" style={{ width: '20px', height: '20px' }} ></img>
                  <a class="" href="#" target="_blank">
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* board of advisor */}
      <section class="section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="text-center" style={{ color: 'rgb(16, 116, 190)' }}>Board of Advisor</h1>
            </div>
          </div>
          <hr />
          <div class="row gy-2 pt-1 justify-content-around">
            <div class="col-sm-3 col-10 mx-auto board text-center aos-init" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" style={{ backgroundColor: 'rgb(244, 244, 244)', padding: '10PX' }}>
              <div class="board-box">
                <div style={{ textAlign: 'center' }}>
                  <div class="board-im">
                    <img src={AnamikaDhyani} alt="Anamika Dhyani" class="ceoImage" /></div>
                </div>
                <div>
                  <h4>Dr. Anamika Dhyani</h4>
                  <p class="text-white rounded" style={{ fontWeight: '900', backgroundColor: '#044577', padding: '10px' }}>VenturesGrow</p>
                </div>
              </div>
              <div class="board-content board-back">
                <h4 class="text-white"> Dr. Anamika Dhyani</h4>
                <p class="text-white rounded" style={{ fontWeight: '900', backgroundColor: '#044577', padding: '10px' }}>VenturesGrow</p>
                <hr />
                <span>
                  <p class="text-white fw-bold">A senior level executive who has been consistently contributing towards various organizational stints building a highly comprehensive professional experience in Operations &amp; Process Management</p>
                </span>
                <span>
                  <img src={linkedin} alt="linkedinprofile" style={{ width: '20px', height: '20px', borderRadius: '20%', marginBottom: '10px' }} ></img>
                  <a class="" href="#" target="_blank">
                  </a></span>
              </div>
            </div>

            <div class="col-sm-3 col-10 mx-auto board text-center aos-init" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" style={{ backgroundColor: 'rgb(244, 244, 244)', padding: '10PX' }}>
              <div class="board-box">
                <div style={{ textAlign: 'center' }}>
                  <div class="board-image">
                    <img src={dineshrana} alt="Dinesh Rana" class="ceoImage" />
                  </div>
                </div>
                <div>
                  <h4 class>Dinesh Rana</h4>
                  <p class="text-white rounded" style={{ fontWeight: '900', backgroundColor: '#044577', padding: '10px' }}>VenturesGrow</p>
                </div>
              </div>
              <div class="board-content">
                <h4 class="text-white">Dinesh Rana</h4>
                <p class="text-white rounded" style={{ fontWeight: '900', backgroundColor: '#044577', padding: '10px' }}>VenturesGrow</p>
                <hr />
                <p class="text-white fw-bold">A senior level executive who has been consistently contributing towards various organizational stints building a highly comprehensive professional experience in Operations &amp; Process Management</p>
                <img src={linkedin} alt="linkedinprofile" style={{ width: '20px', height: '20px', borderRadius: '20%', marginBottom: '10px' }} ></img>
                <a class="" href="#" target="_blank">
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>





    </>

  )
}

export default AboutUs