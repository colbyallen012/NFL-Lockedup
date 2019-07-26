import React from 'react';
import './Player.css';

const Player = ({name, city, team, position, arrests}) => {
  return (
    <div className='crime'>
      <h3>{name}</h3>
      <p>{city} {team}</p>
      <p>{position}</p>
      <p>Arrest Count: {arrests}</p>
    </div>
  )
}

export default Player;