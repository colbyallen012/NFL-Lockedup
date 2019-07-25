import React from 'react';
import { Route, Link } from 'react-router-dom'
import './Team.css';

const Team = ({city, name, conference, abrv}) => {
  return (
    <Route exact path='/' render={() =>
    <div className='team'>
      <h2>{city}</h2>
      <p>{name}</p>
      <p>{conference}</p>
      <Link to={`/${abrv}/Arrests`}>
        <button>More Info</button>
      </Link>
    </div>
    }/>
  )
}

export default Team;