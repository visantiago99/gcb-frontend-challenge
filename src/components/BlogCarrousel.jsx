import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import CarrouselCard from './CarrouselCard';
import React, { useState, useEffect } from 'react';
import bloco_image_1 from '../images/bloco_image_1.svg';
import bloco_image_2 from '../images/bloco_image_2.svg';
import bloco_image_3 from '../images/bloco_image_3.svg';
import bloco_image_4 from '../images/bloco_image_4.svg';
import perfil1 from '../images/perfil1.svg';
import perfil2 from '../images/perfil2.svg';
import perfil3 from '../images/perfil3.svg';
import perfil4 from '../images/perfil4.svg';

export default function BlogCarrousel() {
  const [screenWidth, setScreenWidth] = useState()

  const watchScreen = () => {
    const screenSize = window.innerWidth;
    if (screenSize < 1040 && screenSize > 815) return setScreenWidth('15rem')
    if (screenSize < 815) return setScreenWidth('30rem')
    return setScreenWidth('0rem')
  };

  useEffect(() => {
    watchScreen()
    window.addEventListener('resize', watchScreen);
    return () => window.removeEventListener('resize', watchScreen)
  }, [screenWidth])

  return (
    <div className="carrousel-container">
      <div className="carrousel-info">
        <h3><strong>Read Our Blog</strong></h3>
        <h4>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </h4>
      </div>
      <Splide
    options={ {
      rewind: true,
      perPage: 3,
      gap: screenWidth,
    } }
    >
      <SplideSlide>
        <CarrouselCard
          image={bloco_image_1}
          title="Quick-start guide to nuts and seeds"
          name="Kevin Ibrahim"
          authorImg={perfil1}
        />
      </SplideSlide>
      <SplideSlide>
      <CarrouselCard
          image={bloco_image_2}
          title="Nutrition: Tips for Improving Your Health"
          name="Mike Jackson"
          authorImg={perfil2}
        />
      </SplideSlide>
      <SplideSlide>
      <CarrouselCard
          image={bloco_image_3}
          title="The top 10 benefits of eating healthy"
          name="Bryan McGregor"
          authorImg={perfil3}
        />
      </SplideSlide>
      <SplideSlide>
      <CarrouselCard
          image={bloco_image_4}
          title="What Makes a Healthy Diet?"
          name="Jashua"
          authorImg={perfil4}
        />
      </SplideSlide>
</Splide>
    </div>
  )
}
