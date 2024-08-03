import React, { useEffect, useRef } from "react";
import Base from "../layout/base/Base";
import { Data } from "../assets/json/data";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/footer";
import LoadingScreen from "../components/LoadingScreen";
import FirstBanner from "../components/Banners/FirstBanner";
import SecondBanner from "../components/Banners/SecondBanner";
import Carousel from "../components/Carousel/Carousel";
import DutyCalculationsForm from "../components/QForm/DutyCalculationsForm"
import Head from "next/head";
const index = () => {
  const targetRef = useRef(null);
  const handleVideoLoad = () => {
    const video = document.querySelector("video");
    if (video) {
      video.load();
    }
  };
  const handleClick = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div className="video-container">
        <video
          // controls
          autoPlay
          muted
          playsInline
          poster="/videoplaceholder.png"
          loop
          preload="auto"
          onCanPlayThrough={handleVideoLoad}
          onEnded={(e) => {
            e.target.play(); // Ensure video replays on end
          }}
        >
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
      <Carousel />
      <SecondBanner />
      <Footer handleClick={handleClick} />
    </>
  );
};

export default index;
