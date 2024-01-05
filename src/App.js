import React from 'react';
import Navbar from './components/Navbar';
import MainPage from './pages/Mainpage.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage/>
      <Footer/>
      {/* <h1>Welcome to my React App!</h1> */}
      {/* Add your other components/content here */}
    </div>
  );
}

export default App;
