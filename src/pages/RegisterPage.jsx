import React from 'react';
import Header from '../components/Header';
import Formulary from '../components/Formulary';
import Footer from '../components/Footer';

export default function RegisterPage() {
  return (
    <div>
      <Header register={true} />
      <Formulary />
      <Footer />
    </div>
  )
}
