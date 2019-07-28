import React from 'react'; 
import Crime from '../../Components/Crime/Crime'
import Player from '../../Components/Player/Player'
import Position from '../../Components/Position/Position'
import './CrimesContainer.css'

const CrimesContainer = ({crimes, players, positions}) => {
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

  const displayPositions = positions.map(position => {
    return (
      <Position
        position={position.Position}
        arrests={position.arrest_count}
      />
    )
  })

  return (
    <div>
      <section className='all-container'>
        <article className='crimes-container'>
          <h2 className='heading'>By Crime</h2>
          {displayCrimes}
        </article>
        <article className='player-container'>
          <h2 className='heading'>Multiple Offenders</h2>  
          {displayPlayers}
        </article>
        <article className='position-container'>
          <h2 className='heading'>By Position</h2>  
          {displayPositions}
        </article>
      </section>
    </div>
  )
}

export default CrimesContainer;