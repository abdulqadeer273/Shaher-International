import Image from "next/image";
import React from "react";
import image3 from "../../../assets/images/lucas-van-oort-fBZOVyF-96w-unsplash_1.webp";

const ImportAirFreight = () => {
  return (
    <div className="section3">
      <div
        className="front-full front-full-story featured1"
        // style={{ backgroundColor: "rgb(157 155 87)" }}
        style={{backgroundColor:"rgba(12, 12, 13, 0.3)"}}
      >
        <Image
          // width="3346"
          // height="1878"
          alt="not found"
          priority
          src={image3}
          style={{ mixBlendMode: "multiply" }}
          quality={50}
        />
        <div className="front-full-inner" id="service1" style={{scrollMarginTop:"12rem"}}>
          <div className="font-full-inner-content front-story">
            <h3>Import Air Freight</h3>
            <div className="front-excerpt">
              <p style={{ fontSize: "x-large" }}>
                From small individual consignments to large consolidations, we
                can provide you with a wide range of airfreight services from
                all major airports worldwide. We leep close contact with the
                airlines around the world to track your shipments. Our network
                of agents confirms all cargo delivery.
              </p>
              <p style={{ fontSize: "x-large" }}>
                In peak seasons when space is too critical we provide you with
                effective solution. We are specialized in consoldations from
                Hong Kong and China sector and handling thousands of tons of
                cargo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportAirFreight;
