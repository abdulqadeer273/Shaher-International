import Image from 'next/image'
import React from 'react'
import image4 from "../../../assets/images/ishant-mishra-napAS8Izafs-unsplash.jpg";


const TransportationAndLogistics = () => {
  return (
    <div className="section4">
      <div
        className="front-full front-full-story featured1"
        // style={{ backgroundColor: "#fead86" }}
        style={{backgroundColor:"rgba(12, 12, 13, 0.3)"}}
      >
        <Image
          width="3346"
          height="1878"
          alt="not found"
          src={image4}
          style={{ mixBlendMode: "multiply" }}
        />
        <div className="front-full-inner" id="service3" style={{scrollMarginTop:"12rem"}}>
          <div className="font-full-inner-content front-story">
            <h3>Transportation & Logistics</h3>
            <div className="front-excerpt">
              <p style={{ fontSize: "x-large" }}>
                Transporting cargo by road is the most convenient way to deliver shipments as goods can be collected and dellivered with minimal or no intermediate handling. In fact, millions of tonnes of road freight are trucked by us each year. Our comprehensive freight distribution service includes.
              </p>
              <p style={{ fontSize: "x-large" }}>
                Full loads and LCL. Bonded trucking to and from Inland ports. Door-to-door collections and deliveries. Projects and out of gaue cargo. A range of vehicles including tilt trailers, high-cubes. A multi axle trailers and low bed loaders. In-depth local knowledge from experienced specialists, in line with market demands, we offer dedicated and individual delivery services up to and from the major ports and we have close partnerships with a reliable fleet of sub-contractors, which gives us real flexibility to respond to your changing requirements. 
              </p>
            </div>
          </div>
          {/* <img src="logo-2.png" alt="not found" style={{width:"3rem" , height:"2rem"}}/> */}
        </div>
      </div>
    </div>
  )
}

export default TransportationAndLogistics
