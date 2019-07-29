import React from 'react';
import PropTypes from 'prop-types';
import './Position.css';

const Position = ({position, arrests}) => {
  return (
    <div className='position'>
      <h3 className='crime-position'>{position}</h3>
      <p className='crime-arrests'>Arrest Count: {arrests}</p>
    </div>
  )
}

Position.PropTypes = {
  category: PropTypes.string.isRequired,
  arrests: PropTypes.string.isRequired
}

export default Position;