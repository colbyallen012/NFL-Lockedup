import React from 'react';
import './Position.css';

const Position = ({position, arrests}) => {
  return (
    <div className='position'>
      <h3 className='crime-position'>{position}</h3>
      <p className='crime-arrests'>Arrest Count: {arrests}</p>
    </div>
  )
}

export default Position;