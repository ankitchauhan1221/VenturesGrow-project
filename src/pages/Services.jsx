import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import your Bootstrap css
import 'bootstrap/dist/js/bootstrap.bundle.min.js';     // Import your bootstrap buldle(funcations)
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import  your fontstyle
import AOS from 'aos'; // For Animation



const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      // Global settings here (optional)
    });
  }, []);
  return (
    <>

      <section class="page-header services-page">
        <div class="container">
          <div class="row py-5">
            <div class="col-8 mx-auto text-center">
              <ul class="breadcrumbs" style={{ transform: 'translateY(130px)' }}>
                <li class="list-inline-item"><a href="/" style={{ color: 'rgb(0, 0, 0)' }}>Home</a></li>
                <li class="list-inline-item">Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* //-- End Page Header Section --> */}

      <section class="py-5">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-6">
              <div class="section-title text-center">
                <h1 data-aos="fade-right" class="aos-init" style={{ color: 'rgb(16, 116, 190)' }}>Services we offer</h1>
                <p data-aos="fade-left" class="aos-init">
                  We offer a wide range of E-commerce, Digital Marketing & Web Development Services. Our services include E-commerce Marketplace Management, Social Media Marketing, SEO, Web design, Web development & Creative Graphics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //-- End  Section --> */}

      <section class="section pt-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-md-10 mx-auto" id="E-commerce">
              <div class="row justify-content-center g-5">
                {/* <!-- Social Media Marketing --> */}
                <div class="icon-box-items text-center col-lg-5 col-md-6 col-11 mx-auto mb-4 aos-init aos-animate" data-aos="flip-left" data-aos-easing="ease-out-cubic">
                  <div class="rounded shadow py-2 px-4">
                    <div class="icon text-white"><i class="fas fa-user"></i></div>
                    <h3 class="mb-3">Website Design & Development</h3>
                    <p class="mb-4">Want to turn your business into a growing Digital Brand ? Well If you want to generate better ROI in your online business then you are at the right place. VenturesGrow is the Best Web Design & Development Services Company in India, Makes Website Expressive and Unique.</p>
                  </div>
                </div>

                {/* <!-- Digital Marketing --> */}
                <div class="icon-box-items text-center col-lg-5 col-md-6 col-11 mx-auto mb-4 aos-init aos-animate" id="Digital" data-aos="flip-right" data-aos-easing="ease-out-cubic">
                  <div class="rounded shadow py-2 px-4 ">
                    <div class="icon text-white"><i class="fas fa-house-user"></i></div>
                    <h3 class="mb-3">Ecommerce Consultancy</h3>
                    <p class="mb-4">We help your products to promote on marketplace channels like - Amazon, Flipkart, Blinkit, Myntra, Nykaa, Ajio, Swiggy & Meesho. Our ecommerce services includes services like - product content writing, on-boarding, Photography & ad promotions</p>
                  </div>
                </div>

                {/* <!-- Search Engine Optimization(SEO) --> */}
                <div class="icon-box-items text-center col-lg-5 col-11 mx-auto col-md-6 mb-4 aos-init" id="Web" data-aos="flip-left" data-aos-easing="ease-out-cubic">
                  <div class="rounded shadow py-2 px-4">
                    <div class="icon text-white"><i class="fas fa-user-graduate"></i></div>
                    <h3 class="mb-3">Digital Marketing</h3>
                    <p class="mb-4">Our digital marketing services are personalized and the latest digital marketing trends to meet business requirements. We understand our Client's needs and develop successful strategies that help you reach your marketing goals quickly and efficiently.</p>
                  </div>
                </div>

                {/* <!-- Creative Work --> */}
                <div class="icon-box-item text-center col-lg-5 col-md-6 col-11 mx-auto mb-4 aos-init" id="Creative" data-aos="flip-right" data-aos-easing="ease-out-cubic">
                  <div class="rounded shadow py-2 px-4  ">
                    <div class="icon text-white"><i class="fas fa-house-damage"></i></div>
                    <h3 class="mb-3">Creative Solutions</h3>
                    <p class="mb-4">We are Specialists in Creative Business Strategies, Marketing Solutions, Social Media, UI / UX, and Websites Graphic Design, Print & Portfolio graphics, We also specialise in logo designing, Tshirt & Customised print designing.</p>
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

export default Services