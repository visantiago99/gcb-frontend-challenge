import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Recipes from '../components/Recipes';
import ServiceSection from '../components/ServiceSection';

export default function LandPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Recipes />
      <ServiceSection />
    </div>
  )
}
