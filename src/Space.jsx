import { useState, useEffect } from 'react';
import Star from './Star';

const STAR_SIZE = 50; // Arbitrary size

const Space = () => {
  const [stars, setStars] = useState([]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {/* render stars here */}
    </div>
  );
};

export default Space;
