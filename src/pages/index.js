import React, { useRef } from "react";
import Base from "../layout/base/Base";
import { Data } from "../assets/json/data";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/footer";
import FirstBanner from "../components/Banners/FirstBanner";
import SecondBanner from "../components/Banners/SecondBanner";
import DutyCalculationsForm from "../components/QForm/DutyCalculationsForm";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
import Head from "next/head";

const index = () => {
  const targetRef = useRef(null);
  const handleClick = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Add this line
    autoplaySpeed: 2000, // Add this line (2 seconds)
    arrows:false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div className="video-container">
        <video autoPlay muted playsInline loop preload="auto">
          <source src="/video4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="company-name">Shaher International</div>
      </div>
      {Data?.map((elem, index) => (
        <div key={index}>
          <Base
            index={index}
            imageSrc={elem?.imageSrc}
            videoSrc={""}
            heading={elem?.heading}
            text1={elem?.text1}
            text2={elem?.text2}
            text3={""}
            id={elem?.id}
          />
        </div>
      ))}
      <DutyCalculationsForm targetRef={targetRef} />
      <FirstBanner />
      <Slider {...settings}>
        <div>
          <a href="#service4" className="unit-1 text-center">
            <img src="https://aflogistics.com.pk/images/img_1.jpg" alt="Image" className="img-fluid" />
            <div className="unit-1-text">
              <h3 className="unit-1-heading">Storage</h3>
              <p className="px-5">Fast reliable and cost effective Storage services are available</p>
            </div>
          </a>
        </div>
        <div>
          <a href="#service1" className="unit-1 text-center">
            <img src="https://aflogistics.com.pk/images/img_2.jpg" alt="Image" className="img-fluid" />
            <div className="unit-1-text">
              <h3 className="unit-1-heading">Air Transports</h3>
              <p className="px-5">Fast reliable and cost effective Air Transport services.</p>
            </div>
          </a>
        </div>
        <div>
          <a href="#service3" className="unit-1 text-center">
            <img src="https://aflogistics.com.pk/images/img_3.jpg" alt="Image" className="img-fluid" />
            <div className="unit-1-text">
              <h3 className="unit-1-heading">Cargo Transports</h3>
              <p className="px-5">Fast reliable and cost effective Cargo services are available.</p>
            </div>
          </a>
        </div>
        <div>
          <a href="#service4" className="unit-1 text-center">
            <img src="https://aflogistics.com.pk/images/img_5.jpg" alt="Image" className="img-fluid" />
            <div className="unit-1-text">
              <h3 className="unit-1-heading">Ware Housing</h3>
              <p className="px-5">Fast reliable and cost effective Warehousing services.</p>
            </div>
          </a>
        </div>
      </Slider>
      <SecondBanner />
      <Footer handleClick={handleClick} />
    </>
  );
};

export default index;
