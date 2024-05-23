import Image from "next/image";
import React from "react";
import image4 from "../../../assets/images/nigel-tadyanehondo-GOD2mDNujuU-unsplash.jpg";

const ImportOceanFreight = () => {
  return (
    <div className="section4">
      <div
        className="front-full front-full-story featured1"
        // style={{ backgroundColor: "#1a2d2f" }}
        style={{backgroundColor:"rgba(12, 12, 13, 0.3)"}}
      >
        <Image
          width="3346"
          height="1878"
          alt="not found"
          src={image4}
          style={{ mixBlendMode: "multiply" }}
        />
        <div className="front-full-inner" id="service2" style={{scrollMarginTop:"12rem"}}>
          <div className="font-full-inner-content front-story">
            <h3>Import Ocean Freight</h3>
            <div className="front-excerpt">
              <p style={{ fontSize: "x-large" }}>
                The strategic partnershops we have set up with our associates
                and major ocean carriers bring you advantages in freight rates,
                eqiopment availability, space reservation ensuring your clients
                trust in your business.
              </p>
              <p style={{ fontSize: "x-large" }}>
                We can manage various kinds of cargo, uor dry cargo (FCL, LCL),
                temperature-controlled cargo, project cargo, Open Top, Flat
                rack, RoRo and Break Bulk. We take of your cargo not only on
                sea-way but also on door to door delivery service,
                de-consolidation and other related services.
              </p>
            </div>
          </div>
          {/* <img src="logo-2.png" alt="not found" style={{width:"3rem" , height:"2rem"}}/> */}
        </div>
      </div>
    </div>
  );
};

export default ImportOceanFreight;
