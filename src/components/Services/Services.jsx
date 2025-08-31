import React from 'react'
import './Services.css'
import youghurt from '../../assets/chin.png'

const Services = ({head,subhead,content,reverse,source,animation}) => {
  return (
    <div data-aos={animation} className={`s-section ${reverse ?"reverse" : ""}`}>
      <div className="service">
        <div className="service1">
            <h2>{head}</h2>
            <h3>{subhead}</h3>
            <p>{content}</p>
        </div>
        <div className="service2">
        <img src={source} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Services
