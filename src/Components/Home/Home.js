import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <section className='welcome'>
      <h1 className='welcome-header'>Welcome!</h1>
      <p className='instructions'>Click on the team links to see arrests by team.</p>
      <p className='date'>Data from 1/31/2000-01/31/2016</p>
    </section>
  )
}

export default Home;