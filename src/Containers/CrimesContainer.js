import React from 'react'; 
import Crime from '../Components/Crime'
import Player from '../Components/Player'
import './CrimesContainer.css'

const CrimesContainer = ({crimes, players}) => {
  const displayCrimes = crimes.map(crime => {
    return (
      <Crime 
        category={crime.Category}
        arrests={crime.arrest_count}
        key={crime.category}
      />
    )
  })

  const displayPlayers = players.map(player => {
    return (
      <Player 
        name={player.Name}
        city={player.Team}
        team={player.Team_name}
        position={player.Position}
        arrests={player.arrest_count}
      />
    )
  })

  return (
    <div>
      <section className='crime-header'>
        <h2 className='heading'>All Crimes</h2>
        <h2 className='heading'>Multiple Offenders</h2>  
        <h2 className='heading'>Crimes By Position</h2>      
      </section>
      <section className='all-container'>
        <article className='crimes-container'>
          {displayCrimes}
        </article>
        <article className='player-container'>
          {displayPlayers}
        </article>
      </section>
    </div>
  )
}

export default CrimesContainer;