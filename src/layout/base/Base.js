import Image from "next/image";
import React from "react";

const Base = ({ index, imageSrc, videoSrc, heading, text1, text2, text3 }) => {
  return (
    <div className="section2" key={index}>
      <div
        className="front-full front-full-story featured1"
        // style={{ backgroundColor: "#86b7fe" }}
        // style={{ backgroundColor: "rgba(12, 12, 13, 0.3)" }}
      >
        <Image
          width={2000}
          height={1500}
          alt="not found"
          src={imageSrc}
          priority
          style={{ mixBlendMode: "multiply" }}
          quality={10}
        />
        <div className="front-full-inner">
          <div className="font-full-inner-content front-story">
            <h3>{heading}</h3>
            <div className="front-excerpt">
              {text1 && <p className="para-text" >{text1}</p>}
              {text2 && <p className="para-text">{text2}</p>}
              {text3 && <p className="para-text">{text3}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base;
