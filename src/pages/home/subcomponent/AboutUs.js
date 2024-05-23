import React from "react";
import image1 from "../../../assets/images/ishant-mishra-napAS8Izafs-unsplash.jpg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="section2">
      <div
        className="front-full front-full-story featured1"
        // style={{ backgroundColor: "#86b7fe" }}
        style={{backgroundColor:"rgba(12, 12, 13, 0.3)"}}
      >
        <Image
          width="3346"
          height="1878"
          alt="not found"
          src={image1}
          style={{ mixBlendMode: "multiply" }}
        />
        <div className="front-full-inner">
          <div className="font-full-inner-content front-story">
            <h3>About Us</h3>
            <div className="front-excerpt" >
              <p style={{ fontSize: "x-large" }}>
                M/s SHAHER International has been successfully servicing
                importers & exporters over 30 years. Our continued growth is
                attributable to strong company management and financial
                stability. Our commitment to service excellence has established
                us as Pakistan's leading Custom Agent Company.
              </p>
              <p style={{ fontSize: "x-large" }}>
                Our CEO has to his credit more than 30 years' experience in the
                clearance of goods of diversified nature, including heavy plant &
                machinery and plants' spare parts for power project and Raw materials and Chemicals,this acquiring specialization in these areas. It
                means outsourcing all of your supply chain and lo gistics
                requirements to a capable and trusted company, such as Shaher
                International whos works as an extension of your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
