import React from 'react'
import './Hero.css'
import chin1 from '../../assets/youghurt.png'
import Countup from 'react-countup'
import {FaUsers, FaBeer} from 'react-icons/fa'

const Hero = () => {
    return (
        <div data-aos="zoom-in" className='Hero'>
            
            <div className="heroparent">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 550 150"
                    preserveAspectRatio="none"
                    style={{ width: "100%", height: "110%", position: "absolute", opacity: 0.5 }}
                >
                    <path
                        fill=" #37c941"
                        d="M208.08,0.00 C152.69,67.10 262.02,75.98 200.79,150.00 L0.00,150.00 L0.00,0.00 Z"
                    />
                </svg>
            
                <div className="con1">
                    <h1>Satisfy your <br /> cravings.</h1>
                    <p className='p1'>We offer the best and yummy snack you could ever want - Ranging from your Parfait,cakes,flakes,coated peantus,small chops - to diverse kinds of snacks. <br />Let's take your orders today!</p>
                   <a className='btn1' href="http://wa.me/07072212077" rel='noopener noreferrer' target='_blank'>Get Yours</a>
                    <div className='count'>
                        <div className='count1'>
                            
                            <Countup  start={300} end={350} duration={3} />
                            <span>+</span>
                            <p> satisfied customers</p>
                        </div>
                        <div className='count1'>
                            <Countup start={200} end={250} duration={4} />
                            <span>+</span>
                            <p>orders</p>
                        </div>
                        <div className='count1'>
                            <Countup start={20} end={28} duration={5} />
                            <span>+</span>
                            <p>events</p>
                        </div>

                    </div>
                </div>
                <div className="con2">
                    <p><em>Every bite is a sweet delight</em></p>
                    <img src={chin1} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Hero
