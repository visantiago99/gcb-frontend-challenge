import React from 'react';
import Header from '../components/Header';
import Formulary from '../components/Formulary';

export default function RegisterPage() {
  return (
    <div>
      <Header register={true} />
      <Formulary />
    </div>
  )
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}