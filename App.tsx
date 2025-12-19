import React from 'react';
import HeroSection from './components/HeroSection';
import ValuePropSection from './components/ValuePropSection';
import TestimonialsSection from './components/TestimonialsSection';

export default function App() {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <ValuePropSection />
      <TestimonialsSection />
    </div>
  );
}