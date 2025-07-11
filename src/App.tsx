import React from 'react';
import HeroSection from './components/HeroSection';
import PhotoGallery from './components/PhotoGallery';
import LoveLetters from './components/LoveLetters';
import FinalBanner from './components/FinalBanner';
import FloatingHearts from './components/FloatingHearts';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-x-hidden">
      <FloatingHearts />
      <HeroSection />
      <PhotoGallery />
      <LoveLetters />
      <FinalBanner />
    </div>
  );
}

export default App;