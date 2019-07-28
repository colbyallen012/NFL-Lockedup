import React from 'react';
import './Crime.css';

const Crime = ({category, arrests}) => {
  return (
    <div className='crime'>
      <h3>{category}</h3>
      <p>Arrest Count: {arrests}</p>
    </div>
  )
}

export default Crime;