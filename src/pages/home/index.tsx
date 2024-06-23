import React, { useRef } from "react";
import Header from "@/layout/header/Header";
import Footer from "../../layout/footer/footer";
import Carousel from "../../components/Carousel/Carousel";
import AboutUs from "./subcomponent/AboutUs";
import Scope from "./subcomponent/Scope";
import ImportAirFreight from "./subcomponent/ImportAirFreight";
import ImportOceanFreight from "./subcomponent/ImportOceanFreight";
import TransportationAndLogistics from "./subcomponent/TransportationAndLogistics";
import WarehousingAndDistribution from "./subcomponent/WarehousingAndDistribution";
import DtoDDelivery from "./subcomponent/DtoDDelivery";
import FirstBanner from "../../components/Banners/FirstBanner";
import SecondBanner from "../../components/Banners/SecondBanner";
import DutyCalculationsForm from "../optimised/subcomponents/DutyCalculationsForm";
const Home = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="section1">
        <div className="front-full-video front-full-story featured1">
          <div className="front-shade" style={{ zIndex: "1" }}>
            <Header />
          </div>
          <video autoPlay muted loop>
            <source src="/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            className="front-full-inner-video justify-content-center"
            style={{ marginTop: "15rem" }}
          >
            <div className="font-full-inner-content front-story">
              <img src="/shaher logo.png" width={700} />
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <Scope />
      <ImportAirFreight />
      <ImportOceanFreight />
      <TransportationAndLogistics />
      <WarehousingAndDistribution />
      <DtoDDelivery />
      <DutyCalculationsForm targetRef={targetRef} />
      <FirstBanner />
      <Carousel />
      <SecondBanner />
      <Footer handleClick={handleClick} />
    </div>
  );
};

export default Home;
