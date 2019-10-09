// Lesson: Since each module has its own scope, you must import React in each module.
import React, {PureComponent} from 'react';
// Import PropTypes to validate props.
import PropTypes from 'prop-types';
// The Counter and Icon components must be imported for the Player component to use them.
import Counter from './Counter';
import Icon from './Icon';

// Pure Component was used here to reduce resources by rendering only the affected Player instance when changes occur.
class Player extends PureComponent {

  // Validate prop types.
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number,
    isHighScore: PropTypes.bool
  }

  render(){
    // Create variables to destructure props.
    const {
      name,
      score,
      id,
      key,
      index,
      changeScore,
      removePlayer
    } = this.props;

    // Player elements rendered to the DOM
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          {/* Crown Icon */}
          <Icon  isHighScore={this.props.isHighScore} />
          { name }
        </span>

        <Counter
          score={score}
          changeScore={changeScore}
          index={index}
         />
      </div>
    ); // end of return statement
  } // end of render() method

} // end of Player class

// Each component must be exported and given an export name to allow for imports in other files.
export default Player;
