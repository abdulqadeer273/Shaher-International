// AnimatedText.js

import React from 'react';
import { motion } from 'framer-motion';
import styles from './AnimatedText.module.css'; // Import your module.css file

const AnimatedText = ({ text }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={styles.textContainer}
    >
      {text?.split('').map((char, index) => (
        <motion.span key={index} className={styles.letter}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
