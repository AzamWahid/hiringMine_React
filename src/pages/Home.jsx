import React from 'react';
import HeroSection from '../components/HeroSection';
import StepsSection from '../components/StepsSection';
import DreamJobSection from '../components/DreamJobSection';
import CareerOptionsSection from '../components/CareerOptionsSection';
import ComingSoonSection from '../components/ComingSoonSection';
import Footer from '../components/Footer';
import '../style.css';

function Home() {
  return (
    <div className="container-fluid">
      <HeroSection />
      <StepsSection />
      <DreamJobSection />
      <CareerOptionsSection />
      <ComingSoonSection />
      <Footer />
    </div>
  );
}

export default Home;
