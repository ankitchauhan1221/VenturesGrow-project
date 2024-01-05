// MainPage.js

// import React from 'react';
import React, { useEffect } from 'react';
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
import AOS from 'aos'; // For Animation
import 'aos/dist/aos.css'; // Import AOS styles

const MainPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      // Global settings here (optional)
    });
  }, []);
  return (
    <div className={styles.mainPage}>
      <main className={styles.content}>
        <div className={styles.row} data-aos="fade-right">
          <div className={styles.leftContent}>
            <div className={styles.folder}>
              <h1>We are Media  &amp; Marketing  Advisors</h1>
              <p>We Specialize in developing the best Marketing Strategy for your Digital Business.</p>
              <button>
                Let's Connect <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.text}>
              <img src={image} alt="Your Image" />
            </div>
          </div>
        </div>

        {/* social icon section start */}

        <div class="col-12" style={{ marginLeft: '20px' }}>
          <div className="icon-section mt-4" >
            <ul class="list-unstyled list-inline mb-0">
              <li class="list-inline-item me-4">
                <a class="text-black fw-bold d-flex align-items-center" href="#" target="_blank" style={{ textDecoration: 'none' }}>
                  <img className="facebookpng" style={{ marginRight: '5px', width: '20px', height: '20px' }} src={linkedin} alt="Your Image" /> LINKEDIN
                </a>
              </li>
              <li class="list-inline-item me-4">
                <a class="text-black fw-bold d-flex align-items-center" href="#" target="_blank" style={{ textDecoration: 'none' }}>
                  <img className="facebookpng" style={{ marginRight: '5px', width: '20px', height: '20px' }} src={facebook} alt="Your Image" /> FACEBOOK
                </a>
              </li>
              <li class="list-inline-item me-4">
                <a class="text-black fw-bold d-flex align-items-center" href="#" target="_blank" style={{ textDecoration: 'none' }}>
                  <img className="facebookpng" style={{ marginRight: '5px', width: '20px', height: '20px' }} src={insta} alt="Your Image" /> INSTAGRAM
                </a>
              </li>
              <li class="list-inline-item me-4">
                <a class="text-black fw-bold d-flex align-items-center" href="#" target="_blank" style={{ textDecoration: 'none' }}>
                  <img className="facebookpng" style={{ marginRight: '5px', width: '20px', height: '20px' }} src={twitter} alt="Your Image" /> TWITTER
                </a>
              </li>
              <li class="list-inline-item me-4">
                <a class="text-black fw-bold d-flex align-items-center" href="#" target="_blank" style={{ textDecoration: 'none' }}>
                  <img className="facebookpng" style={{ marginRight: '5px', width: '20px', height: '20px' }} src={yt} alt="Your Image" /> YOUTUBE
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* social icon section  end */}

      </main>
      {/* Second Section Start */}
      <div className={styles.services}>
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles.col} data-aos="fade-right">
              <div class="section-title pt-4">
                <h1 style={{color:'rgb(16, 116, 190)'}}>Our Services</h1>
                <p class="para">Our passion is in delivering business outcomes and having a positive business impact. If you want a full suite of marketing solutions, we get under your skin to understand your brand’s goals and challenges. Our services deliver outcomes and better results for our clients by providing best-in-class expertise. We maximize your ROI and marketing budgets, while taking the risk out of your investment.</p>
                </div>
            </div>

            <div className={styles.cardSection}>
              {/* cards row 1 */}
              <div className={styles.cardRow} data-aos="fade-up">
                {/* card item 1 */}
                <div className={styles.cardContainer}>{/*col-5*/}
                  {/* Card 1 */}
                  <div className={styles.card}>
                    <div className={styles.block}>
                      <span className={styles.coloredBox1}>01</span>
                      <h3 className="mb-2 service-title" style={{ color: '#33425f', fontSize: '1.5rem', fontWeight: 'bold' }}>Social Media Marketing</h3>
                      <p className="mb-0 service-description" style={{ color: '#666', lineHeight: '1.6' }}>These facets form the base for the world of social media and can be referred to as the 7 Cs of social media. These seven Cs are - content, community, conversation, capital (social), culture, collaboration and conversion respectively.</p>
                    </div>

                  </div>
                </div>
                {/* card item 2 */}
                <div className={styles.cardContainer}>{/*col-5*/}
                  {/* Card 2 */}
                  <div className={styles.card}>
                    <div className={styles.block}>
                      <span className={styles.coloredBox2}>02</span>
                      <h3 className="mb-2 service-title" style={{ color: '#33425f', fontSize: '1.5rem', fontWeight: 'bold' }}>Social Media Marketing</h3>
                      <p className="mb-0 service-description" style={{ color: '#666', lineHeight: '1.6' }}>These facets form the base for the world of social media and can be referred to as the 7 Cs of social media. These seven Cs are - content, community, conversation, capital (social), culture, collaboration and conversion respectively.</p>
                    </div>

                  </div>
                </div>
                {/* card item 3 */}
                <div className={styles.cardContainer}>{/*col-5*/}
                  {/* Card 3 */}
                  <div className={styles.card}>
                    <div className={styles.block}>
                      <span className={styles.coloredBox3}>03</span>
                      <h3 className="mb-2 service-title" style={{ color: '33425f', fontSize: '1.5rem', fontWeight: 'bold' }}>Social Media Marketing</h3>
                      <p className="mb-0 service-description" style={{ color: '#666', lineHeight: '1.6' }}>These facets form the base for the world of social media and can be referred to as the 7 Cs of social media. These seven Cs are - content, community, conversation, capital (social), culture, collaboration and conversion respectively.</p>
                    </div>

                  </div>
                </div>
                {/* card item 4 */}
                <div className={styles.cardContainer}>{/*col-5*/}
                  {/* Card 4 */}
                  <div className={styles.card}>
                    <div className={styles.block}>
                      <span className={styles.coloredBox4}>04</span>
                      <h3 className="mb-2 service-title" style={{ color: '#333', fontSize: '1.5rem', fontWeight: 'bold' }}>Social Media Marketing</h3>
                      <p className="mb-0 service-description" style={{ color: '#666', lineHeight: '1.6' }}>These facets form the base for the world of social media and can be referred to as the 7 Cs of social media. These seven Cs are - content, community, conversation, capital (social), culture, collaboration and conversion respectively.</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Seconnd Section End */}

      {/* Second Section Start */}
      <div className={styles.services}>
        <div className={styles.content}>
          <div className={styles.row} >
            <div className={styles.col1}>
            <div class="section-title aos-init aos-animate" data-aos="fade-right">
             <h3 style={{color: 'rgb(16, 116, 190', textAlign: 'center'}}> Accelerate Your Business with Our High-Performance E-commerce &amp; Digital Marketing Services that Connects the Brand to the Customer</h3>
              <p><center>Who we are and what we do</center></p>
            </div>
            </div>

            <div className={styles.cardSection1}>
              {/* cards in one row */}
              <div className={styles.cardRow1} data-aos="fade-up">
                {/* Card 1 */}
                <div className={styles.cardContainer1}>{/*col-5*/}
                  <div className={styles.iconbox}>
                    <span className={styles.coloredBoxicon}>
                      <i class="fa-solid fa-truck-fast"></i></span>
                  </div>
                  <h3 className="mb-2 service-title" style={{ color: '#33425f', fontSize: '1.5rem', fontWeight: 'bold' }}>Professional Team</h3>
                  <p className="mb-0 service-description" style={{ color: '#666', lineHeight: '1.6' }}>Consistent and Accountable Individuals</p>
                </div>
                {/* Card 2 */}
                <div className={styles.cardContainer1}>{/*col-5*/}
                  <div className={styles.iconbox}>
                    <span className={styles.coloredBoxicon}>
                      <i class="fa-solid fa-clipboard"></i></span>
                  </div>
                  <h3 className="mb-2 service-title" style={{ color: '#33425f', fontSize: '1.5rem', fontWeight: 'bold' }}>Result Oriented Approach</h3>
                  <p className="mb-0 service-description" style={{ color: '#666', lineHeight: '1.6' }}>Amazing Analytics & Reports</p>
                </div>
                {/* Card 3 */}
                <div className={styles.cardContainer1}>{/*col-5*/}
                  <div className={styles.iconbox}>
                    <span className={styles.coloredBoxicon}>
                      <i class="fa-solid fa-pen-to-square"></i></span>
                  </div>
                  <h3 className="mb-2 service-title" style={{ color: '#33425f', fontSize: '1.5rem', fontWeight: 'bold' }}>Strategic Management</h3>
                  <p className="mb-0 service-description" style={{ color: '#666', lineHeight: '1.6' }}>Conversion Optimization</p>
                </div>
              </div>
              <div className={styles.cardRow1} data-aos="fade-up">
                {/* Card 4 */}
                <div className={styles.cardContainer1}>{/*col-5*/}
                  <div className={styles.iconbox}>
                    <span className={styles.coloredBoxicon}>
                      <i class="fa-solid fa-handshake"></i>
                    </span>
                  </div>
                  <h3 className="mb-2 service-title" style={{ color: '#33425f', fontSize: '1.5rem', fontWeight: 'bold' }}>Professional Team</h3>
                  <p className="mb-0 service-description" style={{ color: '#666', lineHeight: '1.6' }}>Consistent and Accountable Individuals</p>
                </div>
                {/* Card 5 */}
                <div className={styles.cardContainer1}>{/*col-5*/}
                  <div className={styles.iconbox}>
                  <span className={styles.coloredBoxicon}>
                  <i class="fa-solid fa-bullseye"></i>
                    </span>
                  </div>

                  <h3 className="mb-2 service-title" style={{ color: '#33425f', fontSize: '1.5rem', fontWeight: 'bold' }}>Result Oriented Approach</h3>
                  <p className="mb-0 service-description" style={{ color: '#666', lineHeight: '1.6' }}>Amazing Analytics & Reports</p>
                </div>
                {/* Card 6 */}
                <div className={styles.cardContainer1}>{/*col-5*/}
                  <div className={styles.iconbox}>
                    <span className={styles.coloredBoxicon}>
                    <i class="fa-solid fa-money-bill"></i>
                    </span>
                  </div>
                  <h3 className="mb-2 service-title" style={{ color: '#33425f', fontSize: '1.5rem', fontWeight: 'bold' }}>Strategic Management</h3>
                  <p className="mb-0 service-description" style={{ color: '#666', lineHeight: '1.6' }}>Conversion Optimization</p>
                </div>
              </div>
              {/* If you want more cards, add another row similar to the above structure */}
            </div>
          </div>
          {/* Add more sections or content as needed */}
        </div>
      </div>
      {/* Second Section End */}

      <div className={styles.services}>
        <div className={styles.content}>
          <div className={styles.row1} >
            <div className={styles.leftContent1} data-aos="fade-right" data-aos-duration="3000">
              <div className={styles.mediaContent}>
                <p>What Makes Us Different From Others</p>
                <h3>Why Venturesgrow & Marketing</h3>
                <p>We are a perfectly result-oriented company that requires a balance of ingredients that combines different elements to create a deliciously effective marketing result. Our team is skilled in developing unique and creative robust marketing solutions that capture attention and engage audiences At VENTURESGROW, we work with our clients to develop a customized marketing strategy that balances different approaches to achieve your marketing objectives.</p>
              </div>
            </div>
            <div className={styles.rightContent1}>
              <div className={styles.marketingColumn}>
                <div className={styles.column} data-aos="fade-left" data-aos-duration="3000">
                  <div className={styles.icon}>
                  <i class="fas fa-shield-alt" style={{fontSize:'36px'}}></i>                 
                  </div>
                  <div className={styles.blockContent}>
                    <h3 class>Growth Marketing Framework</h3>
                    <p>Creating a Digital Ecosystem to ensure long-term growth with cost-effective marketing solutions.</p>
                  </div>
                </div>
              </div>
              <div className={styles.marketingColumn}>
                <div className={styles.column} data-aos="fade-up" data-aos-duration="3000">
                  <div className={styles.icon1}>
                  <i class="fas fa-blender-phone" style={{fontSize:'36px'}}></i>                 
                  </div>
                  <div className={styles.blockContent}>
                    <h3 class>Growth Marketing Framework</h3>
                    <p>Creating a Digital Ecosystem to ensure long-term growth with cost-effective marketing solutions.</p>
                  </div>
                </div>
              </div>
              <div className={styles.marketingColumn}>
                <div className={styles.column} data-aos="fade-up" data-aos-duration="3000">
                  <div className={styles.icon}>  
                  <i class="fas fa-money-bill-alt" style={{fontSize:'36px'}}></i>
                   </div>
                  <div className={styles.blockContent}>
                    <h3 class>Growth Marketing Framework</h3>
                    <p>Creating a Digital Ecosystem to ensure long-term growth with cost-effective marketing solutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* tab button contect */}
      <div class="container-lg">
         <div class="row justify-content-center">
            <div class="col-lg-10">
        <div class="section-title text-center">
          <p class="text-primary text-uppercase fw-bold mb-2 aos-init aos-animate" data-aos="fade-right">Difference Of Us</p>
          <br />
          <h1 class="color-1 aos-init aos-animate" data-aos="fade-left" style={{ color: 'rgb(16, 116, 190)' }}>Our Growth Marketing Stage</h1>
        </div>
      </div>
      <div class="col-lg-10">
        <ul class="payment_info_tab nav nav-pills justify-content-center mb-4" id="pills-tab" role="tablist">
          <li class="nav-item m-2" role="presentation">
            <a class="nav-link btn effect-none text-dark active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true" href="#pills-home" >Awareness</a>
          </li>
          <li class="nav-item m-2" role="presentation">
            <a class="nav-link btn effect-none text-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false" href="#pills-profile" >Engagement</a>
          </li>
          <li class="nav-item m-2" role="presentation">
            <a class="nav-link btn effect-none text-dark" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false" href="#pills-contact">Retention</a>
          </li>
        </ul>
        <div class="rounded shadow bg-white p-5 tab-content" id="pills-tabContent">
          <div class="tab-pane fade active show" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div class="row align-items-center">
              <div class="col-md-6 order-1 order-md-0">
                <div class="content-block">
                  <h3 class="mb-4">Awareness</h3>
                  <div class="content">
                    <p>Building awareness for a business is vital. We employ various digital marketing strategies to attract new customers, maintain existing ones, and explore new opportunities for business growth.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 order-0 order-md-1 mb-5 mt-md-0">
                <div class="image-block text-center">
                  <img loading="lazy" decoding="async" src={illustration1} alt="How Much Can I Receive?" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div class="row align-items-center">
              <div class="col-md-6 order-1 order-md-0">
                <div class="content-block">
                  <h3 class="mb-4">Engagement</h3>
                  <div class="content">
                    <p>We assist clients with various needs from strategy to marketing, technology, transformation, and analytics. Our expertise ensures productive interaction among different aspects of an organization.</p>
                    <p>Whether developing new methods or managing operations, we work to help achieve sustainable goals.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 order-0 order-md-1 mb-5 mt-md-0">
                <div class="image-block text-center">
                  <img loading="lazy" decoding="async" src={illustration2} alt="How Much Does It Cost?" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
            <div class="row align-items-center">
              <div class="col-md-6 order-1 order-md-0">
                <div class="content-block">
                  <h3 class="mb-4">Retention</h3>
                  <div class="content">
                    <p>Retain more customers with our marketing methods. Our platform enhances repeat purchases, average order value, and builds a loyal customer base. </p>
                    <p>We help solve marketing and growth challenges through strategic thinking, marketing expertise, operational know-how, digital transformation, and advanced analytics.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 order-0 order-md-1 mb-5 mt-md-0">
                <div class="image-block text-center">
                  <img loading="lazy" decoding="async" src={illustration3} alt="How Do I Repay?" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      {/* Testimonial Section start */}

  <div class="container-lg">
	<div class="row">
		<div class="col-sm-12">			
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
				<h2>Customer <b>Testimonials</b></h2>
				{/* <!-- Carousel indicators --> */}
				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>   
				{/* <!-- Wrapper for carousel items --> */}
				<div class="carousel-inner">
					<div class="carousel-item active">
						<div class="row">
							<div class="col-sm-6">
								<div class="testimonial">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
								</div>
								<div class="media">
                <img src={Malini} alt="Your Image" />
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>Paula Wilson</b></div>
											<div class="details">Media Analyst / SkyNet</div>
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
									<p>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
								</div>
								<div class="media">
                <img src={Malini} alt="Your Image" />
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>Antonio Moreno</b></div>
											<div class="details">Web Developer / SoftBee</div>
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
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
								</div>
								<div class="media">
                <img src={Malini} alt="Your Image" />
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>Michael Holz</b></div>
											<div class="details">Web Developer / DevCorp</div>											
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
									<p>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
								</div>
								<div class="media">
                <img src={Malini} alt="Your Image" />
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>Mary Saveley</b></div>
											<div class="details">Graphic Designer / MarsMedia</div>
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
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
								</div>
								<div class="media">
                <img src={Malini} alt="Your Image" />
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>Martin Sommer</b></div>
											<div class="details">SEO Analyst / RealSearch</div>
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
									<p>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
								</div>
								<div class="media">
									<div class="media-left d-flex mr-3">
                  <img src={Malini} alt="Your Image" />
									</div>
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>John Williams</b></div>
											<div class="details">Web Designer / UniqueDesign</div>
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
				{/* <!-- Carousel controls --> */}
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

    </div>
  );
};

export default MainPage;
