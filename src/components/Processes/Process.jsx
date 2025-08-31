import React from 'react'
import './Process.css'

const Process = ({head,content,img}) => {
  return (
    <div data-aos="zoom-in" className='process'>
      <div className="process-con">
        <div className="process-img">
          <img src={img} alt="" />
        </div>
        <div className="process-text">
          <h2>{head}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default Process
