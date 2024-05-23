import Image from "next/image";
import React from "react";
import image2 from "../../../assets/images/venti-views-FPKnAO-CF6M-unsplash.jpg";

const Scope = () => {
  return (
    <div className="section3">
      <div
        className="front-full front-full-story featured1"
        // style={{ backgroundColor: "#198754" }}
        style={{backgroundColor:"rgba(12, 12, 13, 0.3)"}}
      >
        <Image
          width="3346"
          height="1878"
          alt="not found"
          src={image2}
          style={{ mixBlendMode: "multiply" }}
        />
        <div className="front-full-inner">
          <div className="font-full-inner-content front-story">
            <h3>Scope</h3>
            <div className="front-excerpt">
              <p style={{ fontSize: "x-large" }}>
                We provide you with real time, on-line information about your
                consignment when & where you need it. The benefits include
                gaining a competitive advantage, cutting costs, one window
                solutions, increasing efficiency and generally making life
                easier.
              </p>
              <p style={{ fontSize: "x-large" }}>
                Shaher International offers a global 3PL service for companies
                of all sizes , in all industriesm although we have specialist
                expertise in Engineering, mechanical handling eqiopment,
                textile, auto movile and the power geeration industries. We
                provide end-to-end supply chain management, including
                warehousing, distribution, packaging and freight forwarding,
                with the same dedication and efficiency that has led us to
                become one of the leading companies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scope;
