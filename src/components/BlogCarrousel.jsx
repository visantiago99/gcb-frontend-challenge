import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import CarrouselCard from './CarrouselCard';
import React from 'react';
import bloco_image_1 from '../images/bloco_image_1.svg';
import bloco_image_2 from '../images/bloco_image_2.svg';
import bloco_image_3 from '../images/bloco_image_3.svg';
import bloco_image_4 from '../images/bloco_image_4.svg';
import perfil1 from '../images/perfil1.svg';
import perfil2 from '../images/perfil2.svg';
import perfil3 from '../images/perfil3.svg';
import perfil4 from '../images/perfil4.svg';

export default function BlogCarrousel() {
  return (
    <Splide
    options={ {
      rewind: true,
      gap   : '10rem',
      perPage: 3,
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
  )
}
