import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StepsSection from './components/StepsSection';
import DreamJobSection from './components/DreamJobSection';
import CareerOptionsSection from './components/CareerOptionsSection';
import ComingSoonSection from './components/ComingSoonSection';
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <HeroSection />
      <StepsSection />
      <DreamJobSection />
      <CareerOptionsSection />
      <ComingSoonSection />
      <Footer />
    </div>
  );
}

export default App;
