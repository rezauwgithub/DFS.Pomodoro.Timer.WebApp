import React from 'react';


const formatCounter = (value) => {
  return value.toString().padStart(2, "0");
};


// Digital Counter
export default (props) => (
  <div>
    <span>
      {formatCounter(props.minutes)}:{formatCounter(props.seconds)}
    </span>
  </div>
);