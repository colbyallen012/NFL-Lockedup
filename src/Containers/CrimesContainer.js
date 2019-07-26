import React from 'react'; 
import Crime from '../Components/Crime'
import './CrimesContainer.css'

const CrimesContainer = ({crimes}) => {
  const displayCrimes = crimes.map(crime => {
    return (
      <Crime 
        category={crime.Category}
        arrests={crime.arrest_count}
        key={crime.category}
      />
    )
  })
  return (
    <div>
      <section className='crime-header'>
        <h2 className='heading'>All Crimes</h2>
        <h2 className='heading'>Crimes By Player</h2>  
        <h2 className='heading'>Crimes By Position</h2>      
      </section>
      <section className='crimes-container'>
        {displayCrimes}
      </section>
    </div>
  )
}

export default CrimesContainer;