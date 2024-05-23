import Image from 'next/image'
import React from 'react'
import image4 from "../../../assets/images/lucas-van-oort-fBZOVyF-96w-unsplash.jpg";

const WarehousingAndDistribution = () => {
  return (
    <div className="section4">
      <div
        className="front-full front-full-story featured1"
        // style={{ backgroundColor: "#dc3545" }}
        style={{backgroundColor:"rgba(12, 12, 13, 0.3)"}}
      >
        <Image
          width="3346"
          height="1878"
          alt="not found"
          src={image4}
          style={{ mixBlendMode: "multiply" }}
        />
        <div className="front-full-inner" id="service4" style={{scrollMarginTop:"12rem"}}>
          <div className="font-full-inner-content front-story">
            <h3>Warehousing & Distribution</h3>
            <div className="front-excerpt">
              <p style={{ fontSize: "x-large" }}>
                We work with several warehouses, and load terminals which best fits for our customers need. We also provide public and contracted warehouses to our customers.
              </p>
            </div>
          </div>
          {/* <img src="logo-2.png" alt="not found" style={{width:"3rem" , height:"2rem"}}/> */}
        </div>
      </div>
    </div>
  )
}

export default WarehousingAndDistribution
