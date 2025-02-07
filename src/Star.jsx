import { useRef, useEffect } from 'react';

const Star = ({ id, position, onDestroy }) => {
  // Create a ref for the star element
  const starRef = useRef(null);

  // Focus the star when it mounts
  useEffect(() => {
    if (starRef.current) {
      starRef.current.focus();
    }
  }, []);

  return (
    <div ref={starRef} tabIndex={0}>
      {/* Star content will go here */}
    </div>
  );
};

export default Star;
