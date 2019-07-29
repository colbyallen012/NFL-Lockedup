import React from 'react';
import './Position.css';

const Position = ({position, arrests}) => {
  return (
    <div className='position'>
      <h3>{position}</h3>
      <p>Arrest Count: {arrests}</p>
    </div>
  )
}

export default Position;