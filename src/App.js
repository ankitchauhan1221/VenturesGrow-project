import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './pages/Mainpage';
import Aboutus from './pages/Aboutus';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contactus from './pages/Contactus';
import Footer from './components/Footer';
import Career from './components/Career';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Termscondition from './pages/Termscondition.jsx';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/career" element={<Career />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditons" element={<Termscondition />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
