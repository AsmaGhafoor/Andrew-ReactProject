import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
// import { Pagination } from "swiper"
import "swiper/css/pagination"
import 'swiper/css'
import { Pagination } from 'swiper/modules';



function Testimonial() {
    const clients = [
        {
            img: profilePic1,
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
        },
        {
            img: profilePic2,
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
        },
        {
            img: profilePic3,
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
        },
        {
            img: profilePic4,
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
        },
    ]

    return (
        <div className='t-wrapper'>
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>from me...</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur blur-2" style={{ background: "skyblue" }}></div>
            </div>

            {/* Slider */}
            <Swiper
                // centeredSlides
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={client.img} alt="clientImg" />
                            <span>{client.review}</span>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Testimonial