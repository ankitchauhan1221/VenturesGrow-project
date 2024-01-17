// MainPage.js

// import React from 'react';
import React, { useEffect, useState } from 'react';
import styles from './Mainpage.module.css'; // Import Main page css
import image from '../images/banner3.png'; // Import your image
import 'bootstrap/dist/css/bootstrap.css'; // Import your Bootstrap css
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import  your fontstyle
import 'bootstrap/dist/js/bootstrap.bundle.min.js';     // Import your bootstrap buldle(funcations)
import illustration1 from '../images/illustration-1.c040094e45b9f1d0b5ee.png'; // Import your image
import illustration2 from '../images/illustration-2.396d0c601be73d635c22 (1).png'; // Import your image
import illustration3 from '../images/payment-info.25b9b6f57d19a19d4941.png'; // Import your image
import Malini from '../images/Malini-300x300.jpeg' // Import your image
import yt from '../images/yt.png' // Import your image
import insta from '../images/insta.png' // Import your image
import twitter from '../images/twitter.png' // Import your image
import linkedin from '../images/linkedin.png' // Import your image
import facebook from '../images/facebook.png' // Import your image
import iconimg from '../images/75-757749_marketing-icon-png-flat-marketing-icon-png-transparent.png'
import iconimg2 from '../images/th-removebg-preview.png'
import iconimg3 from '../images/consulting-icon-3.jpg'
import iconimg4 from '../images/creative-brain-set-icons_24877-663-removebg-preview.png'
import alankit from '../images/Alankit.png';
import jaypee from '../images/Jaypee-1.png';
import Tanmay from '../images/Abhirup-300x300.jpeg';
import LoadingSpinner from '../components/LoadingSpinner';
import AOS from 'aos'; // For Animation
import 'aos/dist/aos.css'; // Import AOS styles



const MainPage = () => {
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 2500,
      // Global settings here (optional)
    });
  },
  []);


  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) with setTimeout
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      setLoading(false);
    };
  
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (

    <div>
    {loading ?(
        <LoadingSpinner />
      ) : (
<> 

    <section class="banner bg-tertiary position-relative overflow-hidden">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-6 mb-5 mb-lg-0 aos-init aos-animate" data-aos="fade-right">
            <div class="block text-center text-lg-start pe-0 pe-xl-5">
              <h1 class="text-capitalize mb-">We Are Digital Media & Marketing Advisors</h1>
              <p class="mb-4">We Specialise In Developing The Best Digital Media Strategy For Your Online Business.</p>
              <a type="button" class="btn btn-success" href="/Contactus">Let's Connect<span class="ms-2 fas fa-arrow-right" style={{ fontSize: '14px' }}></span></a>
            </div>
          </div>
          <div class="col-lg-6 aos-init aos-animate" data-aos="fade-left">
            <div class="text-center">
              <img src={image}  alt="banner" class="w-75 py-4" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="icon-section mt-4">
              <ul class="list-unstyled list-inline mb-0 ">
                <li class="list-inline-item me-4">
                  <a class="text-black fw-bold d-flex align-items-center text-decoration-none" href="https://www.linkedin.com/company/venturesgrow/" target="_blank">
                    <img src={linkedin} alt="Your Image" style={{ marginRight: '5px', width: '20px', height: '20px', }} /> LINKEDIN</a>
                </li>
                <li class="list-inline-item me-4">
                  <a class="text-black fw-bold d-flex align-items-center text-decoration-none" href="https://www.instagram.com/venturesgrow_/" target="_blank">
                    <img src={facebook} alt="Your Image" style={{ marginRight: '5px', width: '20px', height: '20px', }} />FACEBOOK</a>
                </li>
                <li class="list-inline-item me-4">
                  <a class="text-black fw-bold d-flex align-items-center text-decoration-none" href="https://www.facebook.com/venturesgrow" target="_blank">
                    <img src={insta} alt="Your Image" style={{ marginRight: '5px', width: '20px', height: '20px', }} />INSTAGRAM</a>
                </li>
                <li class="list-inline-item me-4">
                  <a class="text-black fw-bold d-flex align-items-center text-decoration-none" href="https://twitter.com/venturesgrow_" target="_blank">
                    <img src={twitter} alt="Your Image" style={{ marginRight: '5px', width: '20px', height: '20px', }} />TWITTER</a>
                </li>
                <li class="list-inline-item me-4">
                  <a class="text-black fw-bold d-flex align-items-center text-decoration-none" href="https://youtube.com/venturesgrow" target="_blank">
                    <img src={yt} alt="Your Image" style={{ marginRight: '5px', width: '20px', height: '20px', }} />YOUTUBE</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

{/* our-services-section */}

<section class="section">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-12 aos-init aos-animate" data-aos="fade-right">
        <div class="section-title pt-4">
          <h1 class="text-primary text-center">Our Services</h1>
          <p class="para text-dark text-center">
          VenturesGrow, The Digital Media Company offers a full range of services, Our main motto is to deliver the best outcome and Deliver the Best Service we can.  As a full-service Company, our work covers everything from market analysis to brand and identity, advertising and communications, E-commerce, digital, Web Design and development, and content creation to social media and film. We connect you with your target audience, We strengthen your digital presence by utilizing skilled Website Development, and We maximize your ROI and marketing budgets while taking the risk out of your investment.          </p>
        </div>
      </div>
      <div class="col-lg-12 col-md-12">
        <div class="row justify-content-evenly gy-2 aos-init" data-aos="fade-up">
          <div class="col-lg-5 col-md-5 blurBg service-item">
              <div class="block text-center">
                <div class="colored-box text-center h3 mb-4">
                  <img src={iconimg2}  atl="web"></img>
                 </div>
                <h3 class="mb-2 service-title">Website Design & Development </h3>
                <p class="mb-0 service-description">
                Boost your online presence with professional web design services, At VenturesGrow, we are passionate about delivering exceptional web development & design services that meet the customer's needs Our team of skilled web designers is zealously equipped in creating websites that are eye-catching and fascinating to the same time.                </p>
              </div>
          </div>
          <div class="col-lg-5 col-md-5 blurBg service-item">
              <div class="block text-center">
              <div class="colored-box text-center h3 mb-4">
                  <img src={iconimg3}  atl="web"></img>
              </div>
                <h3 class="mb-3 service-title">Ecommerce Consultancy</h3>
                <p class="mb-0 service-description">
                We manage major E-Commerce marketplace sites like Amazon, Flipkart, Myntra, Nykaa, Ajio, 1MG, Meesho, Blinkit, Zepto, Zomato, Bigbasket & Swiggy. We maximize your marketplace listings & product listing content development, A+ content for Amazon, Photoshoots & Media Campaigns, Amazon FBA.                </p>
              </div>
          </div>
          <div class="col-lg-5 col-md-5 blurBg service-item">
              <div class="block text-center">
              <div class="colored-box text-center h3 mb-4">
                  <img src={iconimg}  atl="web"></img>
              </div>
                <h3 class="mb-3 service-title">Digital Marketing</h3>
                <p class="mb-0 service-description">
                We'll help you create a thriving digital marketing ecosystem. Our Digital Marketing Services are personalised and the Fine-tuned with latest digital marketing trends to business requirements. We understand our Client's expectations and develop successful strategies that help you reach your marketing goals quickly and efficiently.                </p>
              </div>
          </div>
          <div class="col-lg-5 col-md-5 blurBg service-item">
              <div class="block text-center">
              <div class="colored-box text-center h3 mb-4">
                  <img src={iconimg4}  atl="web"></img>
              </div>
                <h3 class="mb-3 service-title">Creative Solutions</h3>
                <p class="mb-0 service-description">
                VenturesGrow is a creative and professional graphic design company that specializes in crafting unique digital designs to make your business stand out. Our Team of experts specialized in creating business strategies, marketing solutions, UI/UX , Website & Social Media Graphic Design.                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    {/* about-section  */}
<section class="about-section section bg-tertiary position-relative overflow-hidden">
        <div class="container mt-3 mb-4">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-12">
              <div class="section-title aos-init" data-aos="fade-right">
                <h3 class="text-primary text-center">
                Accelerate Your Business with Our High-Performance E-commerce, Digital Marketing, Creative, Web Design & Development Services that Connect the Brand to the Customer                </h3>
                <p class="para text-dark text-center">Who we are and what we do</p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center g-2">
            <div class="icon-box-item col-lg-3 col-md-4 col-12 mx-auto mx-sm-2 aos-init" data-aos="fade-up">
              <div class="block_here">
                <div class="icon" style={{color: 'white', alignItems: 'center'}}>
                <i class="fa-solid fa-truck-fast"></i>
                </div>
                <h3 class="mb-3 p-1"> Our Mission</h3>
                <p class="mb-0 p-1">Our Mission is to help businesses to grow more digitally and succeed in an ever-changing digital world.</p>
              </div>
            </div>
            <div class="icon-box-item col-lg-3 col-md-4 col-12 mx-auto mx-sm-2 aos-init" data-aos="fade-up">
              <div class="block_here">
                <div class="icon" style={{color: 'white'}}>
                <i class="fa-solid fa-clipboard"></i>
                </div>
                <h3 class="mb-3 p-1"> Dedicated Team</h3>
                <p class="mb-0 p-1"> &nbsp; Consistent and Accountable  Individuals <br></br></p>
              </div>
            </div>
            <div class="icon-box-item col-lg-3 col-md-4 col-12 mx-auto mx-sm-2 aos-init" data-aos="fade-up">
              <div class="block_here">
                <div class="icon" style={{color: 'white'}}>
                <i class="fa-solid fa-pen-to-square"></i>
                </div>
                <h3 class="mb-3 p-1">Result Oriented Approach</h3>
                <p class="mb-0 p-1">Amazing Analytics & Reports</p>
              </div>
            </div>
            <div class="icon-box-item col-lg-3 col-md-4 col-12 mx-auto mx-sm-2 aos-init" data-aos="fade-up">
              <div class="block_here  justify-content-center">
                <div class="icon" style={{color: 'white', alignItems: 'center',}}>
                <i class="fa-solid fa-handshake"></i>
                </div>
                <h3 class="mb-3 p-1">Strategic Control </h3>
                <p class="mb-0 p-1">Conversion Optmization</p>
              </div>
            </div>
            <div class="icon-box-item col-lg-3 col-md-4 col-12 mx-auto mx-sm-2 aos-init" data-aos="fade-up">
              <div class="block_here">
                <div class="icon" style={{color: 'white'}}>
                <i class="fa-solid fa-bullseye"></i>
                </div>
                <h3 class="mb-3 p-1">Strategic Alliance</h3>
                <p class="mb-0 p-1"> Ideas that deliver ROI</p>
              </div>
            </div>
            <div class="icon-box-item col-lg-3 col-md-4 col-12 mx-auto mx-sm-2 aos-init" data-aos="fade-up">
              <div class="block_here">
                <div class="icon" style={{color: 'white'}}>
                <i class="fa-solid fa-money-bill"></i>
                </div>
                <h3 class="mb-3 p-1">Affordable Pricing</h3>
                <p class="mb-0 p-1">Affordable & Effective</p>
              </div>
            </div>
         </div>
     </div>
</section>

{/* why venturesGrow section */}

<section class="section">
  <div class="container">
    <div class="row align-items-center justify-content-between">
      <div class="col-lg-5 aos-init aos-animate" data-aos="fade-right">
        <div class="section-title">
          <p class="text-primary text-uppercase fw-bold mb-3">What Makes Us Different From Others</p>
          <h1>
            <span class="color-1">Why <span class="d">Ventures</span><span class="m">Grow</span></span>
          </h1>
          <div class="content mb-0 mt-4 text-start">
            <p>We are a perfectly result-oriented company that requires a balance of ingredients that combines different elements to create a deliciously effective marketing result. Our team is skilled in developing unique and creative robust marketing solutions that capture attention and engage audiences At VenturesGrow, we work with our clients to develop a detailed oriented customised marketing strategy that balances different approaches to achieve your marketing goals.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-6 aos-init aos-animate" data-aos="fade-left">
        <div class="difference-of-us-item p-3 rounded mr-0 me-lg-4">
          <div class="d-block d-sm-flex align-items-center m-2 aos-init aos-animate" data-aos="fade-up" data-aos-duration="3000">
            <div class="icon1 me-4 mb-4 mb-sm-0">
              <i class="fas fa-shield-alt mt-4 fs-8"></i></div>
            <div class="block">
              <h3 class="mb-3 fs-4 fw-bold">Growth Marketing Framework</h3>
              <p class="mb-0">Creating a Digital Ecosystem to ensure long-term growth with cost-effective marketing solutions.</p>
            </div>
          </div>
        </div>
        <div class="difference-of-us-item p-3 rounded mr-0 me-lg-4 aos-init" data-aos="fade-up" data-aos-duration="3000">
          <div class="d-block d-sm-flex align-items-center m-2">
            <div class="icon2 me-4 mb-4 mb-sm-0">
              <i class="fas fa-blender-phone mt-4" style={{fontSize: '36px'}}></i></div>
            <div class="block">
              <h3 class="mb-3 fs-4 fw-bold">Timely Delivery</h3>
              <p class="mb-0">Quicker in response &amp; outputs delivered within deadlines</p>
            </div>
          </div>
        </div>
        <div class="difference-of-us-item p-3 rounded mr-0 me-lg-4 aos-init" data-aos="fade-up" data-aos-duration="3000">
          <div class="d-block d-sm-flex align-items-center m-2">
            <div class="icon1 me-4 mb-4 mb-sm-0">
              <i class="fas fa-money-bill-alt mt-4" style={{fontSize: '36px'}}></i></div>
            <div class="block">
              <h3 class="mb-3 fs-4 fw-bold">Quality Assurance</h3>
              <p class="mb-0">We make sure to meet the Industry-level quality standards for every requirement to deliver on our promise of trust &amp; reliability.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

 {/* home-tab-button */}

 <section class="homepage_tab position-relative">
  <div class="section container">
    <div class="row justify-content-center">
      <div class="col-lg-8 mb-4">
        <div class="section-title text-center">
          <p class="text-primary text-uppercase fw-bold mb-2 aos-init" data-aos="fade-right">Difference Of Us</p>
        
          <h1 class="color-1 aos-init" data-aos="fade-left" style={{color: 'rgb (16, 116, 190)'}}>Our Growth Marketing Stage</h1>
        </div>
      </div>
      <div class="col-lg-10">
        <ul class="payment_info_tab nav nav-pills justify-content-center mb-4" id="pills-tab" role="tablist">
          <li class="nav-item m-2" role="presentation">
            <a class="nav-link btn   effect-none text-dark active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" href="#pills-home">Awareness</a>
          </li>
          <li class="nav-item m-2" role="presentation">
            <a class="nav-link btn  effect-none text-dark " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" href="#pills-profile" tabindex="-1">Engagement</a>
          </li>
          <li class="nav-item m-2" role="presentation">
            <a class="nav-link btn  effect-none text-dark " id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" href="#pills-contact" tabindex="-1">Retention</a>
          </li>
        </ul>
        <div class="rounded shadow bg-white p-5 tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
            <div class="row align-items-center">
              <div class="col-md-6 order-1 order-md-0">
                <div class="content-block">
                  <h3 class="mb-4">Awareness</h3>
                  <div class="content">
                    <p>Building awareness for a business is vitally important and so are the digital marketing strategies. Through these various strategies we actively attract new customers, maintain existing customers, develop and explore new business opportunities, work on various techniques which help in growing business to the next level of excellence.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 order-0 order-md-1 mb-5 mt-md-0">
                <div class="image-block text-center">
                <img src={illustration1}  alt="banner" class="w-100 py-4" />                
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade " id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
            <div class="row align-items-center">
              <div class="col-md-6 order-1 order-md-0">
                <div class="content-block">
                  <h3 class="mb-4">Engagement</h3>
                  <div class="content">
                    <p>We help our clients with their most pressing needs from strategy to marketing and operations, technology to transformation, and digital and analytics. By providing deep, functional expertise, we ensure that different aspects of an organization interact in a way that maximizes productivity.</p>
                    <p>Whether it’s developing new marketing methods or better managing marketing operations, we work together to help you achieve your goals in a more sustainable way.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 order-0 order-md-1 mb-5 mt-md-0">
                <div class="image-block text-center">
                <img src={illustration2}  alt="banner" class="w-100 py-4" /></div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade " id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
            <div class="row align-items-center">
              <div class="col-md-6 order-1 order-md-0">
                <div class="content-block">
                  <h3 class="mb-4">Retention</h3>
                  <div class="content">
                    <p>Retain 10X more customers with VenturesGrow marketing methods our retention marketing platform Increase repeat purchases, improve your average order value, and grow your loyal customer base. Drive brand loyalty and increase customer engagement with well-timed, relevant, personal, and contextual messages.</p>
                    <p>We help companies solve their marketing and growth challenges through our unique combination of strategic thinking, marketing expertise, operational know-how, digital transformation capabilities, and advanced analytics.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 order-0 order-md-1 mb-5 mt-md-0">
                <div class="image-block text-center">
                <img src={illustration3}  alt="banner" class="w-100 py-4" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

 {/* Testimonial Section start */}


<div class="container-lg">
	<div class="row">
		<div class="col-sm-12">			
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
				<h2 class="Cu">Customer <b>Testimonials</b></h2>	
				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					{/* <li data-target="#myCarousel" data-slide-to="2"></li> */}
				</ol>   
				<div class="carousel-inner">
					<div class="carousel-item active">
						<div class="row">
							<div class="col-sm-6">
								<div class="testimonial">
									<p> VenturesGrow offers a powerful suit of tools that every marketing team must have.</p>
								</div>
								<div class="media">
                <img src={alankit} alt="Your Image" />
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>Rekha Sharma</b></div>
											<div class="details">Market Manager / Alankit</div>
											<div class="star-rating">
												<ul class="list-inline">
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="testimonial">
									<p>Great service completely enjoyable exciting time made easy with great support, service availability</p>
								</div>
								<div class="media">
                <img src={jaypee} alt="Your Image" />
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>Charu Singh</b></div>
											<div class="details">AVP / Jaypee Group</div>
											<div class="star-rating">
												<ul class="list-inline">
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
						</div>			
					</div>
					<div class="carousel-item">
						<div class="row">
							<div class="col-sm-6">
								<div class="testimonial">
									<p>Thanks for all the dedicated personal service you have shown us. We appreciate the one-on-one help we have received from you. We will be happy to hear that.</p>
								</div>
								<div class="media">
                <img src={Malini} alt="Your Image" />
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>Mrs Malini</b></div>
											<div class="details">Director  / Swabhiman NGO</div>											
											<div class="star-rating">
												<ul class="list-inline">
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="testimonial">
								<p>The Subros Team would like to thank Venturesgrow team and Mr. Ashish Rawat for all the efforts and suggestions that assisted us.</p>
								</div>
								<div class="media">
                <img src={Tanmay} alt="Your Image" />
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>Tanmay Gupta</b></div>
											<div class="details">GM - marketing  / Subros</div>
											<div class="star-rating">
												<ul class="list-inline">
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
						</div>			
					</div>
				</div>
				<a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
					<i class="fa fa-chevron-left"></i>
				</a>
				<a class="carousel-control-next" href="#myCarousel" data-slide="next">
					<i class="fa fa-chevron-right"></i>
				</a>
			</div>
		</div>
	</div>
</div>






</>
      )}
</div>

  );
};

export default MainPage;
