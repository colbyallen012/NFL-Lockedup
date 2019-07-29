import React from 'react';
import PropTypes from 'prop-types';
import './Team.css';

const Team = ({player, position, arrest, description, outcome, season}) => {

  return (
    <div className='team'>
      <h3 className='player-name'>{player} <span className='lighter'>{position}</span></h3>
      <p className='info'><span className='bolder'>Charge: </span>{arrest}</p>
      <p className='info'><span className='bolder'>Outcome: </span>{outcome}</p>
      <p className='info'><span className='bolder'>Description: </span>{description}</p>
      <p className='info'><span className='bolder'>Season: </span>{season}</p>
    </div>
  )
}

Team.propTypes = {
  player: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  arrest: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  outcome: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired
}

export default Team;