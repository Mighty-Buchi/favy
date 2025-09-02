import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Title from './components/Title/Title'
import Services from './components/Services/Services'
import Process from './components/Processes/Process'
import one from './assets/1.png'
import two from './assets/2.png'
import three from './assets/3.png'
import four from './assets/4.png'
import parfait from './assets/yg.png'
import youghurt from './assets/cup.png'
import chin from './assets/flakes.png'
import cake from './assets/cake.png'
import peanut from './assets/peanut.webp'
import chops from './assets/chops.png'
import Testimonies from './components/Testimonies/Testimonies'
import Footer from './components/Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'




const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      offset: 80,
    })

  }, [])
  return (
    <div>
      <Header/>
      <Hero/>
      <Title prefix='Learn more about' header='Our services' />
      <Services animation="fade-left" head='COATED PEANUT' subhead='Crunchy coated groundnut' content='Crunch first, then deep roasted peanut flavor. Lightly sweet, never sticky—the kind of snack you pass around and suddenly it`s gone. Perfect for road trips, movie nights, and office nibbling.' source={peanut} />
      <Services animation="fade-right" head='YOUGURT' subhead='Thick, creamy, and chilled—made fresh daily in classic flavors.' content='Our yogurt is smooth, tangy, and refreshingly chilled. Choose Plain, Vanilla, or Strawberry. Always preservative-free and made with care for a naturally satisfying sip.' source={youghurt} />
      <Services animation="fade-left" head='PARFAIT' subhead='Yogurt with fruits and crunchy toppings.' content='This is our “eat well, feel good” cup. Cold, creamy yogurt, ripe seasonal fruit, and a crunchy granola layer. It`s light but filling—breakfast, snack, or dessert that doesn`t weigh you down.' source={parfait} reverse />
      <Services animation="fade-right" head='CHIN CHIN FLAKES' subhead='Crunchy chin-chin slices' content='Buttery, shatter-crisp, and kissed with nutmeg. We fry in small batches so every handful is fresh and crunchy. It`s the snack you keep “tasting” till the pack is empty.' source={chin} />
      <Services animation="fade-left" head='CAKES' subhead='Rich, milky, and not too sugary' content='Our cakes are rich and nutrient-filled—made with plenty of wholesome milk, real butter, and adequate sugar (sweet, not sugary). Soft crumb, moist layers, and smooth frosting that melts on the tongue. From Vanilla to Chocolate to Red Velvet, we bake like we`re serving family.' source={cake} reverse />
      
      <Services animation="fade-right" head='SMALL CHOPS' subhead='Puff-puff, samosa, spring rolls—well-spiced.' content='We keep it fresh, clean, and well-spiced: puff-puff that`s cloud-soft inside, samosa and spring rolls that stay crisp, and bites that don`t taste oily. Your guests will ask who made them—tell them Frothy Delight did.' source={chops} reverse />
      <Title prefix='How we Deliver' header='Our Process' />
      <div className="processes">
        <Process img={one} head='# Choose what you want' content='Choose Yogurt, Parfait, Chin-Chin Flakes, Cakes, Coated Peanut, or Small Chops. Tell us your size and delivery time.'/>
      <Process  img={two} head='# We prep fresh' content='We make your order after you confirm—real milk, clean prep, and steady hands for that fresh taste.'/>
      <Process img={three} head='# Seal and verify' content='We seal every cup/pack, label flavors and dates, and do a quick taste/quality check.'/>
      <Process img={four} head='# Pick up or Delivery' content='Grab at our spot or let us bring it to you—fast, careful, and still chilled.'/>
      </div>
      <Title prefix='Testimonials' header='What Our Customers Say' />
      <Testimonies/>
      <Title prefix='Profile' header='Contact us' />
      <Footer/>
    </div>
  )
}

export default App
