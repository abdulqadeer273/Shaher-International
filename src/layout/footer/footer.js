import React, { useEffect, useState } from "react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const Footer = ({handleClick}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check the screen width
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Bootstrap's medium breakpoint is 768px
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);
  return (
    <div
      style={{
        alignItems: "center",
        padding: "5rem",
        height: "auto",
        color: "white",
        backgroundColor: "black",
      }}
    >
      {isSmallScreen ? (
        <div
          className="d-flex flex-column align-items-center"
          style={{
            border: "2px solid white",
            padding: "2rem",
            marginBottom: "4rem",
          }}
        >
          <h1 className="text-center">Contact Us now to get Quote</h1>
          <button onClick={handleClick} className="btn btn-dark mt-3">GIVE ME FREE QUOTE</button>
        </div>
      ) : (
        <div
          className="d-flex justify-content-between"
          style={{
            border: "2px solid white",
            padding: "2rem",
            marginBottom: "4rem",
          }}
        >
          <h1>Contact Us now to get Quote</h1>
          <button onClick={handleClick} className="btn btn-dark">GIVE ME FREE QUOTE</button>
        </div>
      )}
      <div className="row" style={{fontSize:"20px"}}>
        <div className="col-md-6 col-lg-6 col-xl-3  col-sm-12">
          <div className="d-grid">
            <h3 className="mb-3">Head office</h3>
            <span className="mb-1">House # 459, Block M,</span>
            <span className="mb-1">Sabzazar Scheme, Lahore</span>
            <span className="mb-1">Tel: 0092-42-3893 2996</span>
            <span className="mb-4">Cell: 0092-301-4978 691</span>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3  col-sm-12 d-grid">
          <h3>Branch office</h3>
          <span className="mb-1">Shuite #110,2nd Floor,</span>
          <span className="mb-1">Chaudhary Center,</span>
          <span className="mb-1">168-Main Multan Road, Lahore.</span>
          <span className="mb-1">Tel: 0092-42-3893 2996</span>
          <span className="mb-4">Cell: 0092-301-4978 691</span>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3  col-sm-12 d-grid">
          <h3>Karachi office</h3>
          <span className="mb-1">Room # 2,1st Floor,</span>
          <span className="mb-1">Puri HousemWest Wharaf</span>
          <span className="mb-1">Road, Karachi.</span>
          <span className="mb-1"></span>
          <span className="mb-4"></span>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3  col-sm-12">
          <h3>Emergency Services</h3>
          <span>+923035701853</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
