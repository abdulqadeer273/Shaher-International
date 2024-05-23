import Image from 'next/image'
import React from 'react'
import image4 from "../../../assets/images/nigel-tadyanehondo-GOD2mDNujuU-unsplash-_1__1.webp";

const DtoDDelivery = () => {
  return (
    <div className="section4">
      <div
        className="front-full front-full-story featured1"
        style={{ backgroundColor: "#1a2d2f" }}
      >
        <Image
          // width="3346"
          // height="1878"
          alt="not found"
          src={image4}
          priority
          style={{ mixBlendMode: "multiply" }}
          quality={50}
        />
        <div className="front-full-inner" id="service5" style={{scrollMarginTop:"12rem"}}>
          <div className="font-full-inner-content front-story">
            <h3>Door-to-door Delivery</h3>
            <div className="front-excerpt">
              <p style={{ fontSize: "x-large" }}>
                We can arrange shipments from port to port or from door to door. We give substantial foolow ups of our all sea shipments from origins till delivery at destination ports. Including Ex-works, FOB and CFR.
              </p>
            </div>
          </div>
          {/* <img src="logo-2.png" alt="not found" style={{width:"3rem" , height:"2rem"}}/> */}
        </div>
      </div>
    </div>
  )
}

export default DtoDDelivery
