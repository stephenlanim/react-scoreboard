// Lesson: Since each module has its own scope, you must import React in each module.
import React from 'react';
// Import PropTypes to validate props.
import PropTypes from 'prop-types';
// Import relevant components.
import Stats from './Stats';
import Stopwatch from './Stopwatch';

// This Component's specific props are passed as parameters to avoid the need to write props.[prop].
const Header = ({players, title}) => {
  return (
    <header>
      <Stats
        players={players} // Stats will need the entire players array to calculate total players and total points
       />
      <h1>{ title }</h1>
      <Stopwatch

      />
    </header>
  );
}

// Validate prop types.
Header.PropTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
}

// Set default prop values in case they are not provided.
Header.defaultProps = {
  title: 'Scoreboard'
}

// Each component must be exported and given an export name to allow for imports in other files.
export default Header;
