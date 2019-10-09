// Lesson: Since each module has its own scope, you must import React in each module.
import React from 'react';
// Import PropTypes to validate props.
import PropTypes from 'prop-types';

// This Component's specific props are passed as parameters to avoid the need to write props.[prop].
const Counter = ({index, score, changeScore}) => {

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
      <span className="counter-score">{ score }</span>
      <button className="counter-action increment" onClick={() => changeScore(index, +1)}> + </button>
    </div>
  );

}

// Validate prop types.
Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
};

// Each component must be exported and given an export name to allow for imports in other files.
export default Counter;
