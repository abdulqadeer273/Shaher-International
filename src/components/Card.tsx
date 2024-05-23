import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

interface CardProps {
  image: any;
}
const Card: React.FC<CardProps> = ({ image }) => {
  const [showOverLay, setShowOverLay] = useState(false);
  return (
    <motion.div
      className="card"
      style={{
        position: "relative",
        overflow: "hidden",
        height: "400px",
        width: "25rem", // Adjusted width
        minWidth: "400px",
        background: "slate-400",
        // cursor: "pointer",
      }}
      onHoverStart={() => setShowOverLay(true)}
      onHoverEnd={() => setShowOverLay(false)}
    >
      <AnimatePresence>
        {showOverLay && (
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              style={{
                position: "absolute",
                background: "black",
                cursor: "pointer,events,none",
                opacity: 50,
                height: "full",
                width: "full",
              }}
            />
            <motion.h1
              style={{
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold",
                fontSize: "x-large",
                zIndex: 10,
                borderRadius: "3rem",
                cursor: "pointer",
                opacity: showOverLay ? 75 : "unset",
              }}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
              className="py-2 px-3"
            >
              <span>Explore Now</span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <Image
        src={image}
        alt={image}
        fill
        style={{
          objectFit: "cover",
          // border: showOverLay ? "1rem solid black" : "",
          // opacity: showOverLay ? 0.9 : 1,
          filter: showOverLay ? "blur(3px)" : "",
        }}
      />
    </motion.div>
  );
};
export default Card;
