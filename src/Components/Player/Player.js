import React from 'react';
import PropTypes from 'prop-types';
import './Player.css';

const Player = ({name, city, team, position, arrests}) => {
  return (
    <div className='player'>
      <h3 className='crime-player-name'>{name} <span className='deets'>{city} {team} {position}</span></h3>
      <p className='crime-arrests'>Arrest Count: {arrests}</p>
    </div>
  )
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  arrests: PropTypes.string.isRequired
}

export default Player;