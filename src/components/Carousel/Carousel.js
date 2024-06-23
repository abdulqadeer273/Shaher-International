import Image from "next/image";
import React, { useEffect, useState } from "react";
import image4 from "../../assets/images/nigel-tadyanehondo-GOD2mDNujuU-unsplash.jpg";
import { animate, useMotionValue, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import slider4 from "../../assets/images/slider4.webp";
import Card from "../Card";

const Carousel = () => {
  const FAST_DURATION = 10;
  const SLOW_DURATION = 75;
  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const images = [slider1, slider2, slider3, slider4];
  useEffect(() => {
    let controls;
    let finalPosition = -width / 4 - 8;
    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
  }, [xTranslation, width, duration, rerender]);
  return (
    <div className="section7">
      <div
        className="front-full-slider front-full-story featured1"
        style={{ backgroundColor: "#1a2d2f" }}
      >
        <div className="front-shade-needed"></div>
        <Image
          width="3346"
          height="1878"
          alt="not found"
          src={image4}
          style={{ mixBlendMode: "multiply" }}
        />
        <div className="front-full-inner-slider">
          <div className="font-full-inner-content front-story">
            <div className="text-center">
              <div className="mb-2">
                <h2 style={{ color: "white" }}>Maximize your results with</h2>
                <h2 style={{ color: "white" }}>our core features</h2>
              </div>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <motion.div
                style={{
                  margin: "3rem",
                  left: 0,
                  display: "flex",
                  gap: 50,
                  x: xTranslation,
                  justifyContent: "center",
                  borderTop: "1rem solid black",
                  borderBottom: "1rem solid black",

                  backgroundColor: "rgb(143 166 236)",
                  padding: "2rem",
                }}
                onHoverStart={() => {
                  setMustFinish(true);
                  setDuration(SLOW_DURATION);
                }}
                onHoverEnd={() => {
                  setMustFinish(true);
                  setDuration(FAST_DURATION);
                }}
                ref={ref}
              >
                {[...images, ...images].map((item, idx) => (
                  <Card image={item} key={idx} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
