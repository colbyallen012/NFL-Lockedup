import React from 'react';
import PropTypes from 'prop-types';
import './Crime.css';

const Crime = ({category, arrests}) => {
  return (
    <div className='crime'>
      <h3 className='crime-crime'>{category}</h3>
      <p className='crime-arrests'>Arrest Count: {arrests}</p>
    </div>
  )
}

Crime.propTypes = {
  category: PropTypes.string.isRequired,
  arrests: PropTypes.string.isRequired
}

export default Crime;