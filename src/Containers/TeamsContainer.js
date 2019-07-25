import React from 'react'; 
import Team from '../Components/Team'
import './TeamsContainer.css'


const TeamsContainer = ({teams}) => {
  const displayTeams = teams.map(team => {
    return (
      <Team 
        city={team.Team_city}
        name={team.Team_name}
        conference={team.Team_Conference}
        abrv={team.Team}
        key={team.Team}
      />
    )
  })
  return (
    <section className='team-container'>
      <section className='team-container'>
        {displayTeams}
      </section>
    </section>
  )
}

export default TeamsContainer;