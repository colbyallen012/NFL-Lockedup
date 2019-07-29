import React from 'react';
import './Crime.css';

const Crime = ({category, arrests}) => {
  return (
    <div className='crime'>
      <h3 className='crime-crime'>{category}</h3>
      <p className='crime-arrests'>Arrest Count: {arrests}</p>
    </div>
  )
}

export default Crime;