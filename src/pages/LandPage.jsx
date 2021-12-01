import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Recipes from '../components/Recipes';
import ServiceSection from '../components/ServiceSection';
import BlogCarrousel from '../components/BlogCarrousel';
import MemberShipSection from '../components/MemberShipSection';
import Footer from '../components/Footer';

export default function LandPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Recipes />
      <ServiceSection />
      <BlogCarrousel />
      <MemberShipSection />
      <Footer />
    </div>
  )
}
