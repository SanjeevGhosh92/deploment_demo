import React from 'react'
import './Work.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'


const Work = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="work" id = 'Work'>
                {/* Left side */}
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>Work for all the brands</span>
            <span>Brand and Clients</span>
            <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing.
                <br />
                Lorem ipsum dolor sit amet consectetur.
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </span>

            <button className="btn hire-btn">Hire Me</button>
            <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
    
        </div>


    </div>
  )
}

export default Work