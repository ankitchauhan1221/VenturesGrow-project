import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import your Bootstrap css
import 'bootstrap/dist/js/bootstrap.bundle.min.js';     // Import your bootstrap buldle(funcations)
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import  your fontstyle
import AOS from 'aos'; // For Animation

const Career = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
            // Global settings here (optional)
        });
    }, []);

    
    return (
        <>
        
        <div class="demo" >
            <h1>Ankit </h1>
        </div>
        
        
        </>
    )
};

        export default Career;