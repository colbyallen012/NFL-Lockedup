import React from 'react';
import { Route, Link } from 'react-router-dom'
import { getOneTeamData } from '../apiCalls/apiCalls'
import './Team.css';

const Team = ({city, name, conference, abrv}) => {

  const getTeamInfo = () => {
    const a = abrv
    getOneTeamData(a)
    console.log(a)
  }

  return (
    <Route exact path='/' render={() =>
    <div className='team'>
      <h2>{city}</h2>
      <p>{name}</p>
      <p>{conference}</p>
      <Link to={`/${abrv}/Arrests`} onClick={() => getTeamInfo()}>
        <button>More Info</button>
      </Link>
    </div>
    }/>
  )
}

export default Team;