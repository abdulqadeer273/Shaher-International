import React, { useState } from 'react';
import cargoplane from '../../assets/images/cargoplane.webp'
import cargoship from '../../assets/images/cargoship.webp'
import cargotruck from '../../assets/images/cargotruck.webp'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
const ImageSlider = () => {

    const images = [
        { src: cargoplane, text: '12 Feb 2024 - 16 Jun 2024', alt: 'Collection at HOF' },
        { src: cargoship, text: '12 Apr 2024 - 13 Oct 2024', alt: 'Exhibition at HAL' },
        { src: cargotruck, text: '12 Apr 2024 - 13 Oct 2024', alt: 'Exhibition at HAL' },
        // Add more images as needed
    ];

    return (
        <Swiper
            centeredSlides={false}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            loopFillGroupWithBlank={true}
            freeMode={false}
            direction={'horizontal'}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false
            }}
            speed={500}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} style={{ margin: '0 10px' }}>
                    <Image src={image.src} alt={image.alt} width={500} height={300} />
                    <p>{image.text}</p>
                </SwiperSlide>
            ))}
        </Swiper>

    );
};

export default ImageSlider;
