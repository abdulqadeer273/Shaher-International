import React from "react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const Footer = ({handleClick}) => {
  
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
      <div className="row" style={{fontSize:"20px"}}>
        <div className="col-3">
          <div className="d-grid">
            <h3 className="mb-3">Head office</h3>
            <span className="mb-1">House # 459, Block M,</span>
            <span className="mb-1">Sabzazar Scheme, Lahore</span>
            <span className="mb-1">Tel: 0092-42-3893 2996</span>
            <span className="mb-4">Cell: 0092-301-4978 691</span>
            <div>
              <span className="me-2">
                <BsFacebook />
              </span>
              <span className="me-2">
                <BsGithub />
              </span>
              <span className="me-2">
                <BsTwitter />
              </span>
            </div>
          </div>
        </div>
        <div className="col-3 d-grid">
          <h3>Branch office</h3>
          <span className="mb-1">Shuite #110,2nd Floor,</span>
          <span className="mb-1">Chaudhary Center,</span>
          <span className="mb-1">168-Main Multan Road, Lahore.</span>
          <span className="mb-1">Tel: 0092-42-3893 2996</span>
          <span className="mb-4">Cell: 0092-301-4978 691</span>
        </div>
        <div className="col-3 d-grid">
          <h3>Karachi office</h3>
          <span className="mb-1">Room # 2,1st Floor,</span>
          <span className="mb-1">Puri HousemWest Wharaf</span>
          <span className="mb-1">Road, Karachi.</span>
          <span className="mb-1"></span>
          <span className="mb-4"></span>
        </div>
        <div className="col-3">
          <h3>Emergency Services</h3>
          <span>+923035701853</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
