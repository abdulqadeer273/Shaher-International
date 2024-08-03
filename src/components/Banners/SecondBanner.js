import React from "react";
import slogo1 from "../../assets/images/slogo1.png";
import slogo2 from "../../assets/images/slogo2.png";
import slogo3 from "../../assets/images/slogo3.png";
import slogo4 from "../../assets/images/slogo4.png";
import Image from "next/image";

const SecondBanner = () => {
  return (
    <div
      style={{
        background: "rgb(240, 245, 249)",
        alignItems: "center",
        textAlign: "center",
        paddingBottom: "1rem",
        paddingTop: "1rem",
      }}
    >
      <div className="d-flex justify-content-evenly">
        <Image className="banner-logo-image-1" src={slogo1} alt="not found" />
        <Image className="banner-logo-image-1" src={slogo2} alt="not found" />
        <Image className="banner-logo-image-2" src={slogo3} alt="not found" />
        <Image className="banner-logo-image-3" src={slogo4} alt="not found" />
      </div>
    </div>
  );
};

export default SecondBanner;
