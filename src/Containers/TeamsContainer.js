import React from 'react'; 
import Team from '../Components/Team'
import './TeamsContainer.css'


const TeamsContainer = ({arrests}) => {
  const displayTeamArrests = arrests.map(arrest => {
    return (
      <Team 
        player={arrest.Name}
        position={arrest.Position_name}
        arrest={arrest.Category}
        description={arrest.description}
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

export default TeamsContainer;