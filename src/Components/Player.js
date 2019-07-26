import React from 'react';
import './Player.css';

const Player = ({name, city, team, position, arrests}) => {
  return (
    <div className='crime'>
      <li>{name} {city} {team} {position} Arrest Count: {arrests}</li>
      {/* <h3>{name}</h3>
      <p>{city} {team} {position}</p>
      <p>Arrest Count: {arrests}</p> */}
    </div>
  )
}

export default Player;