import React from 'react';
import './Crime.css';

const Crime = ({category, arrests}) => {
  return (
    <div className='crime'>
      {/* <li><span className='bold'>{category}</span> Arrest Count:{arrests}</li> */}
      <h3>{category}</h3>
      <p>Arrest Count: {arrests}</p>
    </div>
  )
}

export default Crime;