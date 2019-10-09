// Lesson: Since each module has its own scope, you must import React in each module.
import React from 'react';
// Import PropTypes to validate props.
import PropTypes from 'prop-types';

// This Component's specific props are passed as parameters to avoid the need to write props.[prop].
const Stats = ({players}) => {

  const totalPlayers = players.length;
  const totalPoints = players.reduce((total, player) => {
    return total + player.score;
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );

}
// Validate prop types.
Stats.PropTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  }))
}

export default Stats;
