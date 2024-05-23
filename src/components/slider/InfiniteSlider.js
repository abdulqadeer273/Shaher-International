import { useState, useEffect } from 'react';

const InfiniteSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, items.length]);

  return (
    <div className="infinite-slider">
      {items.map((item, index) => (
        <div
          key={index}
          className={`slider-item ${index === currentIndex ? 'active' : ''}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default InfiniteSlider;
