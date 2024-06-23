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
        <Image src={slogo1} alt="not found" width={110} height={110} />
        <Image src={slogo2} alt="not found" width={110} height={110} />
        <Image src={slogo3} alt="not found" width={130} height={100} />
        <Image src={slogo4} alt="not found" width={100} height={100} />
      </div>
    </div>
  );
};

export default SecondBanner;
