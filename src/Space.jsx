import { useState, useEffect } from 'react';
import Star from './Star';

const STAR_SIZE = 50; // Arbitrary size

const Space = () => {
  const [stars, setStars] = useState([]);

  // Function to add new stars to the stars array every 2.5 seconds
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

  // Function to destroy a star by filtering it out of the state array
  const destroyStar = (id) => {
    setStars((prevStars) => prevStars.filter((star) => star.id !== id)); // Removes star with matching id from stars array
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {stars.map((star) => (
        <Star
          key={star.id}
          id={star.id}
          position={{ x: star.x, y: star.y }}
          onDestroy={destroyStar}
        />
      ))}
    </div>
  );
};

export default Space;
