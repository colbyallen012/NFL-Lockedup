import React from 'react';
import './Crime.css';

const Crime = ({category, arrests}) => {
  return (
    <div className='crime'>
      <h2>{category}</h2>
      <p>Arrests: {arrests}</p>
    </div>
  )
}

export default Crime;