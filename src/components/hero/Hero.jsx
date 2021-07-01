import React from 'react'
import './Hero.css'
import HeroImage from '../../images/heroBackground.png'

const Hero = props => {
  return(
    <React.Fragment>
      <div className="Hero">
        <div className="Hero__color_filter" style={{height: props.h}}></div>
        <div className="Hero__img" style={{height: props.h}}>
          <img src={HeroImage} alt="herobackground"/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Hero