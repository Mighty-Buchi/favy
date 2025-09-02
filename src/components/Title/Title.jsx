import React from 'react'
import './Title.css'
const Title = ({prefix,header}) => {
  return (
    <div className='title'>
      <p>{prefix}</p>
      <p className='h2'>{header}</p>
    </div>
  )
}

export default Title
