import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import 'swiper/css'

function Portfolio() {
  return (
    <div className='portfolio'>
        {/* heading */}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* Slider */}
        <Swiper>
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
        </Swiper>
      
    </div>
  )
}

export default Portfolio
