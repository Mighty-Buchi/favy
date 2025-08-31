import React from 'react'
import './Title.css'
const Title = ({prefix,header}) => {
  return (
    <div className='title'>
      <p>{prefix}</p>
      <h2>{header}</h2>
    </div>
  )
}

export default Title
