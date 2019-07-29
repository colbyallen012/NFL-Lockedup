import React from 'react'; 
import Team from '../../Components/Team/Team'
import PropTypes from 'prop-types';
import './TeamsContainer.css'


const TeamsContainer = ({arrests}) => {
  const displayTeamArrests = arrests.map(arrest => {
    return (
      <Team 
        player={arrest.Name}
        position={arrest.Position_name}
        arrest={arrest.Category}
        description={arrest.Description}
        outcome={arrest.Outcome}
        season={arrest.ArrestSeasonState}
        key={arrest.Arrest_stats_id}
      />
    )
  })
  return (
    <section className='team-container'>
      <section className='team-container'>
        {displayTeamArrests}
      </section>
    </section>
  )
}

TeamsContainer.propTypes = {
  arrests: PropTypes.array.isRequired
}

export default TeamsContainer;