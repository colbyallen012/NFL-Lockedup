import React from 'react';
import './Player.css';

const Player = ({name, city, team, position, arrests}) => {
  return (
    <div className='crime'>
      {/* <li>{name} {city} {team} {position} Arrest Count: {arrests}</li> */}
      <h3>{name} <span className='deets'>{city} {team} {position}</span></h3>
      <p>Arrest Count: {arrests}</p>
    </div>
  )
}

export default Player;