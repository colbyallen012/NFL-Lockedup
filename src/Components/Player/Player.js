import React from 'react';
import './Player.css';

const Player = ({name, city, team, position, arrests}) => {
  return (
    <div className='player'>
      <h3 className='crime-player-name'>{name} <span className='deets'>{city} {team} {position}</span></h3>
      <p className='crime-arrests'>Arrest Count: {arrests}</p>
    </div>
  )
}

export default Player;