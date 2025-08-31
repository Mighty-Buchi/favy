import React from 'react'
import './Footer.css'
import whatsapp from '../../assets/whatsapp.png'
import tiktok from '../../assets/tweet.png'
import tel from '../../assets/tel.png'
import locate from '../../assets/locate.png'

const Footer = () => {
  return (
    <div className='contact'>
      <div className="contact-details">
        <h2>Frothy Delight</h2>
        <p>Fruity Delight is more than just a treat — it`s nature`s freshness served with color, health, and joy. Our brand brings together the vibrant goodness of fruits in every sip and bite, reminding you that healthy can also be delicious.</p>
        <div className='icons'>
            <a href="https://wa.me/07072212077" target='_blank' rel='noopener noreferrer'><img src={whatsapp} alt="" /></a>
          <a href="https://www.tiktok.com/@yogurt_parfait_peanut"><img src={tiktok} alt="" /></a>
          <a href="tel:2347072212077"><img src={tel} alt="" /></a>
          <a href=""><img src={locate} alt="" /></a>
          </div>
          <a className='end-btn' href="https://wa.me/07072212077" target='_blank' rel='noopener noreferrer'>Get Now</a>
      </div>
      <div className="contact-links">
        <h2>Useful Links</h2>
          <div className='links'>
            <a href="https://wa.me/07072212077" target='_blank' rel='noopener noreferrer'>whatsapp</a>
            <a href="https://www.tiktok.com/@yogurt_parfait_peanut">Tiktok</a>
            <a href="tel:+2347072212077">Telephone</a>
            <a href="">Location</a>
          </div>
      </div>
      <div className='end'>
        <p>&copy; 2025 Frothy Delight. All Rights Reserved </p>
      </div>
    </div>
  )
}

export default Footer
