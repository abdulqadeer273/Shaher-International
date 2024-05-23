import React, { useState, useRef, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import cargoplane from '../../assets/images/cargoplane.jpg'
import cargoship from '../../assets/images/cargoship.jpg'
import cargotruck from '../../assets/images/cargotruck.jpg'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const CustomCarousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide style={{ width: '300px', height: '200px' }}>Slide 1</SwiperSlide>
                <SwiperSlide style={{ width: '300px', height: '200px' }}>Slide 2</SwiperSlide>
                <SwiperSlide style={{ width: '300px', height: '200px' }}>Slide 3</SwiperSlide>
                {/* Add more slides as needed */}
            </Swiper>
            <Carousel showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop useKeyboardArrows autoPlay>
                <div style={{ width: '300px', height: '200px' }}>
                    <Image src={cargoplane} />
                    <p className="legend">Slide 1</p>
                </div>
                <div style={{ width: '300px', height: '200px' }}>
                    <Image src={cargoship} />
                    <p className="legend">Slide 2</p>
                </div>
                <div style={{ width: '300px', height: '200px' }}>
                    <Image src={cargotruck} />
                    <p className="legend">Slide 3</p>
                </div>
                {/* Add more slides as needed */}
            </Carousel>
        </>
    );
};

export default CustomCarousel;