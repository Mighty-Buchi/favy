import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link } from 'react-scroll'
import logo from '../../assets/logo3.png'


const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`Header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <Link to='Hero' offset={-300} ><img src={logo} alt="" /></Link>
      </div>
      <div className="navbar">
        <ul>
          <li><Link to='Hero' offset={-300} >HOME</Link></li>
          <li><Link to='service' offset={-100} >PRODUCTS</Link></li>
          <li><Link to='process' offset={-200} >PROCESS</Link></li>
          <li><Link to='tes' offset={-100} >TESTIMONIES</Link></li>
          <a className='button' href="https://wa.me/07072212077" target='_blank' rel='noopener noreferrer' >ORDER NOW</a>
        </ul>
      </div>
      {/* <div className="hamburger">

      </div> */}
    </div>
  )
}

export default Header
