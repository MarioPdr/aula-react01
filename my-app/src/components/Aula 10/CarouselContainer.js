import React from "react";
import CarouselComponent from "./CarouselComponent";
import React from 'react';
import '../Aula 10/style.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import Imagem from './camisa-de-time.jpg'
import Imagem2 from './camisa-de-time2.jpg'
import Imagem3 from './camisa-de-time3.jfif'

const CarouselContainer = () => {

  return (
    <div className='box_banner'>
      <ResponsiveCarousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img src={Imagem} alt="Slide 1" />
        </div>
        <div>
          <img src={Imagem2} alt="Slide 2" />
        </div>
        <div>
          <img src={Imagem3} alt="Slide 3" />
        </div>
      </ResponsiveCarousel>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

export default CarouselContainer;
