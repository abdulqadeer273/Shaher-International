import React from 'react';
import { Carousel } from 'react-bootstrap';
import cargoplane from '../../assets/images/cargoplane.jpg'
import cargoship from '../../assets/images/cargoship.jpg'
import cargotruck from '../../assets/images/cargotruck.jpg'
import Image from 'next/image';

const Circular = () => {
    const SliderData = [
        { src: cargoplane, text: '12 Feb 2024 - 16 Jun 2024', alt: 'Collection at HOF' },
        { src: cargoship, text: '12 Apr 2024 - 13 Oct 2024', alt: 'Exhibition at HAL' },
        { src: cargotruck, text: '12 Apr 2024 - 13 Oct 2024', alt: 'Exhibition at HAL' },
        { src: cargoplane, text: '12 Feb 2024 - 16 Jun 2024', alt: 'Collection at HOF' },
        { src: cargoship, text: '12 Apr 2024 - 13 Oct 2024', alt: 'Exhibition at HAL' },
        { src: cargotruck, text: '12 Apr 2024 - 13 Oct 2024', alt: 'Exhibition at HAL' },
        // Add more images as needed
    ];
    return (
        <Carousel>
            {SliderData.map((item, index) => (
                <Carousel.Item key={index}>
                    <Image src={item.src} alt={item.text}
                        style={{
                            // border: isHovered ? "2px solid black" : "none",
                            height: "400px",
                            width: "30rem",
                        }}
                    />
                    <Carousel.Caption>
                        <h3>{item.text}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Circular;