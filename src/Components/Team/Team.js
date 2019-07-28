import React from 'react';
import './Team.css';

const Team = ({player, position, arrest, description, outcome, season}) => {

  return (
    <div className='team'>
      <li>{player} {position} {arrest} {description} {outcome} {season}</li>
    </div>
  )
}

export default Team;