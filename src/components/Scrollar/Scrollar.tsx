// ScrollingText.tsx

import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
const ScrollingText: React.FC<{ text: string }> = ({ text }) => {
    const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const { top, height } = divRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const isVisible = top < windowHeight - height / 2;
        setIsVisible(isVisible);

        const isDivAtTop = top >= 0 && top < windowHeight;
        if (isDivAtTop) {
          // Implement logic for moving the div here
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={divRef} className={styles.container}>
      <img className={styles['background-image']} src="cover3.jpg" alt="Background" />
      <div className={`${styles.text} ${isVisible ? styles.visible : ''}`}>
        Hello World
      </div>
    </div>
  );
};


export default ScrollingText;
