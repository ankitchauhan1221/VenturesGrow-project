import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';

const Career = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
    }, []);

    const openSweetAlert = () => {
        Swal.fire({
            title: 'Interested?',
            text: 'Send your resume to hr@venturesgrow.com',
            icon: 'success',
            confirmButtonText: 'OK',
        });
    };

    return (
        <>

            <section class="page-header career-page">
                <div class="container">
                    <div class="row py-5">
                        <div class="col-8 mx-auto text-center">
                            <ul class="breadcrumbs" style={{ transform: 'translateY(130px)' }}>
                                <li class="list-inline-item"><a href="/" style={{ color: 'rgb(0, 0, 0)' }}>Home</a></li>
                                <li class="list-inline-item">Career</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* //-- End Page career header Section --> */}

            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center">
                                <h1 data-aos="fade-right" className="aos-init" style={{ color: 'rgb(16, 116, 190)' }}>JOB OPENINGS</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row mission-card-section gy-3">
                        <div className="col-md-4 aos-init" data-aos="fade-up">
                            <div className="mission-card">
                                <div className="main-card">
                                    <div className="ours">MOBILE APP DEVELOPERS</div>
                                    <div className="icon-missions">
                                        <i className="fa-solid fa-code"></i>
                                    </div>
                                </div>
                                <hr />
                                <p>
                                    Company Name: VENTURES GROW <br />
                                    Location: Noida
                                </p>
                                <p className="text-dark fw-bold">
                                    <a href="#" onClick={openSweetAlert} style={{ textDecoration: 'none' }}>
                                        Apply <i className="align-item-center fa-solid fa-angles-right"></i>
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div class="col-md-4 aos-init" data-aos="fade-down">
                            <div class="mission-card">
                                <div class="main-card">
                                    <div class="ours text-uppercase">Business Development Executive</div>
                                    <div class="icon-missions">
                                        <i class="fa-solid fa-business-time"></i>
                                    </div>
                                </div>
                                <hr />
                                <p>
                                    Company Name: VENTURES GROW <br />
                                    Location: Noida
                                </p>
                                <p class="text-dark fw-bold" >
                                    <a href="#" onClick={openSweetAlert} style={{ textDecoration: 'none' }}>
                                        Apply <i class=" align-item-center fa-solid fa-angles-right"></i></a>
                                </p>
                            </div>

                        </div>

                        <div class="col-md-4 aos-init" data-aos="fade-up">
                            <div class="mission-card">
                                <div class="main-card">
                                    <div class="ours text-uppercase">Digital Marketing Executive</div>
                                    <div class="icon-missions" >
                                        <i class="fa-solid fa-bullhorn"></i>
                                    </div>
                                </div>
                                <hr />
                                <p>
                                    Company Name: VENTURES GROW <br />
                                    Location: Noida
                                </p>
                                <p class="text-dark fw-bold">
                                    <a href="#" onClick={openSweetAlert} style={{ textDecoration: 'none' }}>
                                        Apply <i class=" align-item-center fa-solid fa-angles-right"></i></a>
                                </p>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </>
    );
};

export default Career;
