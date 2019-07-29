import React from 'react';
import './Team.css';

const Team = ({player, position, arrest, description, outcome, season}) => {

  return (
    <div className='team'>
      <h3 className='player'>{player} <span className='lighter'>{position}</span></h3>
      <p><span className='bolder'>Charge: </span>{arrest}</p>
      <p><span className='bolder'>Outcome: </span>{outcome}</p>
      <p><span className='bolder'>Description: </span>{description}</p>
      <p><span className='bolder'>Season: </span>{season}</p>
    </div>
  )
}

export default Team;