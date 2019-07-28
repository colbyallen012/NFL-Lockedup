import React from 'react';
import './Position.css';

const Player = ({position, arrests}) => {
  return (
    <div className='crime'>
      <h3>{position}</h3>
      <p>Arrest Count: {arrests}</p>
    </div>
  )
}

export default Player;