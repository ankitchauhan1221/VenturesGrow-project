import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const PrivacyPolicy = () => {
    const [loading, setLoading] = useState(true); // Initialize the loading state


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
            {loading ? (
                <LoadingSpinner />
            ) : (

                <>
                    <section class="page-header PrivacyPolicy-page">
                        <div class="container">
                            <div class="row py-5">
                                <div class="col-8 mx-auto text-center">
                                    <ul class="breadcrumbs" style={{ transform: 'translateY(130px)' }}>
                                        <li class="list-inline-item"><a href="/" style={{ color: 'rgb(0, 0, 0)' }}>Home</a></li>
                                        <li class="list-inline-item">PrivacyPolicy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* page-header end */}

                    <section>
                        <div class="container">
                            <div class="row pt-4">
                                <div class="col-12 privacy">
                                    <p>
                                        VenturesGrow(<span> “we”, “us”, “our”</span>), respects every individual’s right to privacy and it is our endeavour to protect their personal and Sensitive personal data or information. This
                                        Privacy Policy (<span>“Policy”</span>) applies to all visitors (i.e. those who do not have an Account with VenturesGrow) and users (i.e. those who have an Account with VenturesGrow) (collectively referred to as<span>“User”</span>) who
                                        share their personal and Sensitive personal data with us, while visiting, accessing, browsing and using our website and mobile application (collectively referred to as <span>“Website”</span>). The purpose of this Policy
                                        is to inform Users regarding collection, use, storage, transfer and disclosure of their data. Before submitting any information to us, please carefully read this Policy to understand how we shall treat your information.
                                    </p>
                                    <p>
                                        The User acknowledges that this Policy is a part of VenturesGrow<span>Terms &amp; Conditions</span> and all terms defined in the Terms of Use have the same meaning here in this Policy. Access, browsing and continuous use of
                                        the Website constitutes the User’s unconditional consent to this Policy read together with the Terms of Use. If the User does not agree with the terms of this Policy, please do not visit and use our Website. This Policy
                                        can be easily accessed at various places on our Website, including but not limited to when Users create an account with us on our Website.
                                    </p>
                                    <h4>Definitions</h4>
                                    <p>
                                        <span>Personal Information:</span>Any information that relates to a natural person, which, either directly or indirectly, in combination with other information available or likely to be available with a body corporate,
                                        is capable of identifying such person. Such information includes name, address, mobile number, etc.
                                    </p>
                                    <p>
                                        <span>Sensitive personal data or information relating to:</span>passwords; financial information such as bank accounts or credit card or debit card or other payment instrument details; physical, physiological and mental
                                        health condition; sexual orientation; medical records and history; biometric information; any of the information received under above clauses by body corporate for processing or storage under lawful contract or
                                        otherwise. Information which is freely available in the public domain or furnished under the Right to Information Act, 2005 or any other law shall not be regarded as sensitive personal data or information.
                                    </p>
                                    <p>
                                        <span>Payment Data:</span>It is defined as end-to-end transaction details and information pertaining to payment or settlement transaction that is gathered / transmitted / processed as part of a payment message /
                                        instruction. Payment Data includes - Customer data (Name, Mobile Number, email, Aadhaar Number, PAN number, etc. as applicable); Payment sensitive data (customer and beneficiary account details); Payment Credentials
                                        (OTP, PIN, Passwords, etc.); and, Transaction data (originating &amp; destination system information, transaction reference, timestamp, amount, etc.).
                                    </p>
                                    <p>
                                        <span>Consent for collection of Personal Information</span><br />
                                        Users provide their consent to the use, disclosure, storage, possession, receiving, dealing or handling of their Personal Information by accessing, browsing, or availing services on the Website. Users provide their
                                        specific consent to the use, disclosure, storage, possession, receiving, dealing or handling of their Sensitive personal data or information for lawful purposes enumerated in this policy through checking the box
                                        affirming such consent appearing at the time of creation of their Account on the Website.
                                    </p>
                                    <p>VenturesGrow presumes adequate and lawful parental consent in case the Personal Information or Sensitive personal data or information is shared by a User under the age of 18 years.</p>
                                    <p>
                                        <span>Types of Information we collect</span><br />
                                        The Users who access and use our Website are required to submit certain Personal Information and Sensitive personal data or information for creating an Account, entering into transactions with us and obtaining customer
                                        support services. Personal Information and Sensitive personal data or information which may be collected by us includes:
                                    </p>
                                    <p>
                                        full name and age; PAN; Masked Aadhaar; password of User’s account registered with us; postal address; E-mail address; mobile number; internet protocol (IP) addresses (through cookies); URL of website accessed prior to
                                        and post Users’ accessing our Website; credit/debit card number, credit/debit card expiration date and/or other payment instrument details; User’s feedback, queries, e-mails, letters, suggestions provided to us; third
                                        party information about concerned User’s activities or postings on the Website; Information about the mobile/tab device the App is installed on or mobile device identifier. any other information relevant for accessing
                                        and using our Website as maybe required by us.
                                    </p>
                                    <p>
                                        <span>Purpose of Collection</span><br />
                                        We shall collect your Personal Information or Sensitive personal data or information only for specific, clear and lawful purposes. These include: to give the User a safe, efficient, smooth and personalised experience
                                        while using our Website; to improve our services and products; to respond to your queries or complaints generally related to our services, etc; to send promotional emails containing information about our existing and new
                                        products/services, newsletters, notify changes in this Policy or other policies etc; to analyse the traffic on our Website and conduct market research regarding users’ demographics, interests, and behaviour; to create
                                        new products and services; to provide customer support services; to detect, to enforce Terms of Conditions; other such lawful purposes as described at the time of collection of Personal Information or Sensitive personal
                                        data or information.
                                    </p>
                                    <p>
                                        <span>Disclosure of information</span><br />
                                        You expressly consent to and authorize us to share your Personal Information and Sensitive personal data or information with our trusted affiliates and any other third party, to the extent and for the lawful purposes as
                                        stated in this Policy. We shall not disclose any Personal Information or Sensitive personal data or information to any government institution or authority, except where such disclosure is (i) obligated by law, (ii)
                                        requested by a lawfully authorized government authority, (iii) pursuant to a judicial decree, (iv) for enforcing and protecting the legal rights of VenturesGrow or others’, (v) for seeking any relief, (vi) for defending any
                                        charge, (vii) for opposing any claim, (viii) for enforcing this Policy or our Terms of Use, (ix) for obtaining any legal advice. We also reserve our right to disclose, share or transfer your Personal Information or
                                        Sensitive personal data or information to a third party due to any change in ownership, merger, restructuring or sale of our business assets.
                                    </p>
                                    <p>
                                        Use of cookies and other technologies<br />
                                        To improve the effectiveness and usability of the Website for our Users, we use “cookies”, or similar technology to collect information and assign each visitor a unique random number called as a User Identification (User
                                        ID) in order to understand the User's individual interests. Our web servers automatically collect limited information about the User’s computer connection to the Internet, including User’s IP address, when the User
                                        visits the Website (User’s IP address is a number that lets computers connected to the internet know where to send data to the User such as the web pages viewed by the User).
                                    </p>
                                    <p>
                                        Users may encounter “cookies” or other similar devices on certain pages of the Website that are placed by third parties. We do not control the use of cookies by third parties and disclaim any obligation or liability
                                        associated thereto.
                                    </p>
                                    <p>
                                        <span>Links to other websites</span><br />
                                        The Website provides links to other websites which may or may not collect information about the User. The User acknowledges that this Policy does not cover the collection and use of information by such sites and that we
                                        shall not be responsible for the privacy policies, practices or content of the linked websites.
                                    </p>
                                    <p>
                                        <span>Retention of Information</span><br />
                                        Your Personal Information and Sensitive personal data or information may be retained and used until: (i) the relevant purposes for the use of your information described in this Policy are no longer applicable; and (ii)
                                        we are no longer required by applicable law, regulations, contractual obligations or legitimate business purposes to retain your information; and (iii) the retention of your information is not required for the
                                        establishment, exercise or defines of any legal claim.
                                    </p>
                                    <p>
                                        <span>Mailers</span><br />
                                        VenturesGrow may send direct mailers to the User at the email address given by the User. The User has the option to opt-out of this direct mailer by way of links provided at the bottom of each mailer or any other means as Venturesgrow
                                        deems appropriate. venturesgrow respects every User’s privacy and in the event that User chooses to not receive such mailers, venturesgrow will take all steps to remove the User from the list. If a User wants to remove his/her/it’s
                                        contact information from all mailing lists and newsletters, the same can be done through “Profile” page of his/her/it’s account with Venturesgrow.
                                    </p>

                                    <p>
                                        <span>How we secure the information</span><br />
                                        The Website has put stringent security measures necessary to prevent misuse, unauthorised access, modification, disclosure or destruction of your Personal Information and Sensitive personal data or information in our
                                        control. All information collected by us is stored on servers secured behind a firewall; such servers are password-protected and access is strictly limited based on need-to-know basis.
                                    </p>
                                    <p>
                                        We may undertake periodic review of our security safeguards and this Policy to incorporate such future changes as may be appropriate to ensure that integrity of your Personal Information and Sensitive personal data or
                                        information is intact. In case of any security breach which is likely to cause harm to the User, we shall notify the User of such breach as soon as practicable and take necessary measures to remedy the breach or mitigate
                                        any immediate harm.
                                    </p>
                                    <p>If you seek any clarifications regarding this Policy or wish to raise any issue or grievance with respect to illegal access, use or disclosure of Personal Information, please e-mail at connect@venturesgrow.com</p>
                                    <p>We shall attempt to resolve any issues within a period of thirty (30) days from the date of receipt of the question, concern, grievance or report.</p>
                                    <p>This Policy is published in compliance of: - Section 43A of the Information Technology Act, 2000 and Regulation 4 of the Information Technology Rules, 2011.</p>
                                    <p>Thanking you for using VENTURESGROW</p>
                                </div>
                            </div>
                        </div>
                    </section>






                </>

            )}
        </div>

    );
};

export default PrivacyPolicy