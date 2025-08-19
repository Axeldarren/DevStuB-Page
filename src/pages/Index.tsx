import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About'; 
import Activities from '@/components/Activities';
import JoinSection from '@/components/JoinSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Activities />
      <JoinSection />
    </div>
  );
};

export default Index;