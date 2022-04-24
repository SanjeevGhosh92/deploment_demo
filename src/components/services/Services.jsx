import React from 'react'
import './Services.css'
import Heartemoji from '../../image/Heartemoji.png'
import Glasses from '../../image/Glasses.png'
import Humble from '../../image/Humble.png'
import Card from '../card/Card'
import Resume from './Resume.pdf'
// For blur css of intro css
import '../intro/Intro.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'


const Services = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>

                    {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
            <span>Services</span>
            <span>
                Which Includes beautiful/Creative Web designs Awesome User-Interface, 
                Interective User-Interface. 
            </span>
            <a href={Resume} download>
              <button className="btn cv-btn">Download CV</button>
            </a>
        <div className="blur cv-blur" style={{ background: '#abf1ff94'}}></div>
        </div>
                     {/* rightside  */}
                     {/* 1st ARD */}
        <div className="cards" style={{left: '19rem'}}>
          <Card
          emoji = {Heartemoji}
          heading = {'Design'}
          detail = {"Figma, sketch, photoshop, adobe"}
          />
        </div>
                      {/* 2nd CARD */}
        <div style={{position: 'relative', top: '12rem', left: '-14rem'}}>
          <Card 
          emoji = {Glasses}
          heading = {'Developer'}
          detail = {"Html, Css, JavaScript, ReactJs"} 
          />
        </div>
                      {/* 3rd CARD */}
        <div style={{ position:'relative', top: '20rem', left: '-8rem'}}>
          <Card
          emoji = {Humble}
          heading = {'UI/UX'}
          detail = {"Interective User-Interface "}
          />
        </div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
    </div>

    
  )
}

export default Services