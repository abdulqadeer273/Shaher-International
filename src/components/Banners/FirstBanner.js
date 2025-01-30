import React from "react";
import Image from "next/image";
import ikea from "../../assets/images/ikea_logo_icon.webp";
import yahoo from "../../assets/images/yahoo.webp";
import google from "../../assets/images/google.webp";
import godaddy from "../../assets/images/godaddy.png";
const FirstBanner = () => {
  return (
    <div
      style={{
        background: "#F0F5F9",
        alignItems: "center",
        textAlign: "center",
        paddingBottom: "2rem",
        paddingTop: "2rem",
      }}
    >
      <p style={{ fontWeight: "bold" }}>
        Worked with leading industries and founders
      </p>
      <div className="d-flex justify-content-evenly">
        <Image 
          className="f-banner-image-1"
          src={ikea}
          alt="Ikea Logo"
          width={100}
          height={100}
        />
        <Image
          className="mt-4 f-banner-image-2"
          src={yahoo}
          alt="Yahoo Logo"
          width={100}
          height={100}
        />
        <Image
          className="mt-4 f-banner-image-3"
          src={google}
          alt="Google Logo"
          width={100}
          height={100}
        />
        <Image
          className="mt-4 f-banner-image-4"
          src={
            godaddy
          }
          alt="GoDaddy Logo"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default FirstBanner;
