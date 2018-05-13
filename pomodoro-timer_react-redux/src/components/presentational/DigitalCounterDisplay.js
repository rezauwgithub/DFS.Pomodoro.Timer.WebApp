import React from 'react';


const formatCounterDisplay = (value) => {
  return value.toString().padStart(2, "0");
};


// Digital Counter
export default (props) => (
  <div>
    <span>
      {formatCounterDisplay(props.minutes)}:{formatCounterDisplay(props.seconds)}
    </span>
  </div>
);