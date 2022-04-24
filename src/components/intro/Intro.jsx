import React from 'react'
import './Intro.css'

import Github from '../../image/Github.png'
import LinkedIn from '../../image/Linkedin.png'
import Instagram from '../../image/Instagram.png'
import Vector1 from '../../image/Vector1.png'
import Vector2 from '../../image/Vector2.png'
import Boy from '../../image/Boy.png'
import Crown from '../../image/Crown.png'
import Thumbsup from '../../image/Thumbsup.png'
import Floating from './Floating'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Intro = () => {

  const transition =  {duration : 3, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span  style= {{color :darkMode? 'white': ''}}>Hy! I Am</span>
          <span>Sanjeev Ghosh</span>
          <span>Front end Developer With a 
            Skill on HTML,CSS,JAVASCRIPT, 
            REACTJS.
          </span>
        </div>
        <button className="i-btn btn" >Contact Me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />

        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
      </div>

      <motion.div
      initial={{ top: '-4%', left:'68%' }}
      whileInView={{ left: '50%'}}
      transition={transition}
      className="floating-div"

      style={{top: '-4%', left:'68%'}}
      ><Floating image={Crown} txt1='Web' txt2='Developer'/>
      </motion.div>

      <motion.div
      initial={{ top: '18rem', left:'0rem'  }}
      whileInView={{ left: '0rem'}}
      transition={transition}
      className='floating-div'

      style={{top: '18rem', left:'0rem' }}

      ><Floating image={Thumbsup} txt1='Best design' txt2='React Js' />
      </motion.div>
      <div className="blur" style={{ backgroundColor: "rgb(238 210 255)" }}></div>
      <div className="blur" 
      style={{ 
        background: '#c1f5ff',
        top: '0rem',
        width: '21rem',
        height: '10rem',
        left: '25rem'
            }}>
            </div>
    </div>
  );
};

export default Intro ;