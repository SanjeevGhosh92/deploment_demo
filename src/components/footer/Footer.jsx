import React from 'react'
import './Footer.css'
import Wave from '../../image/Wave.png'

//  for Icons 
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkdin from '@iconscout/react-unicons/icons/uil-linkedin'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: ""}} />
        <div className="f-content">
            <span>sanjeevghosh92@gmail.com</span>
            <div className="f-icons">
                <Github color='white' size='3rem' />
                <Linkdin color='white' size='3rem' />
                <Twitter color='white' size='3rem' />
            </div>
        </div>
    </div>
  );
};

export default Footer;
