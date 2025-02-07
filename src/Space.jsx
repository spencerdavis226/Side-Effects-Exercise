import { useState, useEffect } from 'react';
import Star from './Star';

const STAR_SIZE = 50; // Arbitrary size

const Space = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStars((prevStars) => {
        const newStar = {
          id: Date.now(), // Some unique identifier
          x: Math.random() * (window.innerWidth - STAR_SIZE),
          y: Math.random() * (window.innerHeight - STAR_SIZE),
        };
        return [...prevStars, newStar];
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {/* render stars here */}
    </div>
  );
};

export default Space;
