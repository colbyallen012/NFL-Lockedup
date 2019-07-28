import React from 'react';
import './Team.css';

const Team = ({player, position, arrest, description, outcome, season}) => {

  return (
    <div className='team'>
      <h3>{player}</h3>
      <p><span className='bolder'>{position}</span></p>
      <p><span className='bolder'>Charge: </span>{arrest} <span className='bolder'>Outcome: </span>{outcome}</p>
      <p><span className='bolder'>Description: </span>{description}</p>
      <p><span className='bolder'>Season: </span>{season}</p>
    </div>
  )
}

export default Team;