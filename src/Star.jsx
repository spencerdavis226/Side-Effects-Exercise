import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const STAR_SIZE = 50;

const Star = ({ id, position, onDestroy }) => {
  // Create a ref for the star element
  const starRef = useRef(null);

  // Focus the star when it mounts
  useEffect(() => {
    if (starRef.current) {
      starRef.current.focus();
    }
  }, []);

  // Click handler to destroy the star
  const handleClick = () => {
    onDestroy(id);
  };

  return (
    <div
      ref={starRef}
      tabIndex={0} // Makes the div focusable
      onClick={handleClick}
      onFocus={(e) =>
        (e.target.style.boxShadow = '0 0 10px 2px rgba(255, 255, 255, 0.8)')
      }
      onBlur={(e) => (e.target.style.boxShadow = 'none')}
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${STAR_SIZE}px`,
        height: `${STAR_SIZE}px`,
        backgroundColor: 'yellow',
        borderRadius: '50%',
        cursor: 'pointer',
        outline: 'none',
      }}
    ></div>
  );
};

Star.propTypes = {
  id: PropTypes.number.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  onDestroy: PropTypes.func.isRequired,
};

export default Star;
