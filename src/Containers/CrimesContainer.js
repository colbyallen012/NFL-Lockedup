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
    <section className='crimes-container'>
        {displayCrimes}
    </section>
  )
}

export default CrimesContainer;