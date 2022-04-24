import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Portfolio1 from '../../image/Portfolio1.png'
import Portfolio2 from '../../image/Portfolio2.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'


const Portfolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>
            {/* heading */}
      <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>
             {/* Slider */}
      <Swiper 
      spaceBetween={30}
      slidesPerView={1}
      grabCursor={true}
      className='portfolio-slider'
      >
         <SwiperSlide>
           <img src={Portfolio1} alt="" />
         </SwiperSlide>

         <SwiperSlide>
           <img src={Portfolio2} alt="" />
         </SwiperSlide>
      </Swiper> 
    </div>
  ) ;
};

export default Portfolio;