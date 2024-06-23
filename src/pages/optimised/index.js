import React, { useEffect, useRef } from "react";
import Base from "../../layout/base/Base";
import { Data } from "../../assets/json/data";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/footer";
import LoadingScreen from "../../components/LoadingScreen";
import FirstBanner from "../../components/Banners/FirstBanner";
import SecondBanner from "../../components/Banners/SecondBanner";
import Carousel from "../../components/Carousel/Carousel";
import DutyCalculationsForm from "./subcomponents/DutyCalculationsForm";
const index = () => {
  const targetRef = useRef(null);
  const handleVideoLoad = () => {
    const video = document.querySelector("video");
    video.load();
  };
  const handleClick = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  // useEffect(() => {
  //   const testFunction = async () => {
  //     try {
  //       const response = await fetch('/.netlify/functions/contact', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({
  //           name: 'Abdul Qadeer',
  //           email: 'rq5047772@gmail.com',
  //           message: 'This is a test message'
  //         })
  //       });

  //       const result = await response.json();
  //       if (result.success) {
  //         console.log('Message sent successfully:', result);
  //       } else {
  //         console.log('Failed to send message:', result);
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   testFunction();
  // }, []);
  return (
    // <LoadingScreen/>
    <div>
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
          />
        </div>
      ))}
      <DutyCalculationsForm targetRef={targetRef}/>
      <FirstBanner />
      <Carousel />
      <SecondBanner />
      <Footer handleClick={handleClick}/>
    </div>
  );
};

export default index;
