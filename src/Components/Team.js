import React from 'react';
import './Team.css';

const Team = ({city, name, conference, abrv}) => {

  return (
    <div className='team'>
      <h2>{city}</h2>
      <p>{name}</p>
      <p>{conference}</p>
    </div>
  )
}

export default Team;