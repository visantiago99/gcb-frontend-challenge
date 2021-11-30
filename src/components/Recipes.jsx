import React from 'react';
import comida_1 from '../images/comida_1.svg';
import comida_2 from '../images/comida_2.svg';
import comida_3 from '../images/comida_3.svg';
import comida_4 from '../images/comida_4.svg';
import RecipesCard from './RecipesCard';

export default function Recipes() {
  return (
    <div className="recipes-container">
      <div className="recipes-text">
        <h1>Our Best Recipes</h1>
        <h4>Far far away, behind the word mountains, far from the countries</h4>
        <h4>Vokalia and Consonantia, there live the blind texts.</h4>
      </div>
      <div className="recipes-grid-container">
        <RecipesCard comida={comida_1} info="Broccoli Salad with Bacon" />
        <RecipesCard comida={comida_2} info="Classic Beef Burguers" />
        <RecipesCard comida={comida_3} info="Classic Potato Salad" />
        <RecipesCard comida={comida_4} info="Cherry Cobbler on the Grill" />
      </div>
    </div>
  )
}
