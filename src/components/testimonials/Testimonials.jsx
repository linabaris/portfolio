import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

// import Swiper core and reqoired modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR1,
    name: 'Tina Show',
    review: `Molestie at elementum eu facilisis sed odio morbi quis commodo. Tristique nulla aliquet enim tortor.
    Sed sed risus pretium quam vulputate dignissim suspendisse. Laoreet id donec ultrices tincidunt arcu. 
    Malesuada proin libero nunc consequat interdum varius sit amet mattis. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. 
    Ornare massa eget egestas purus viverra.`
  },
  {
    avatar: AVATAR2,
    name: 'Shatta Wale',
    review: `Molestie at elementum eu facilisis sed odio morbi quis commodo. Tristique nulla aliquet enim tortor.
    Sed sed risus pretium quam vulputate dignissim suspendisse. Laoreet id donec ultrices tincidunt arcu. 
    Malesuada proin libero nunc consequat interdum varius sit amet mattis. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. 
    Ornare massa eget egestas purus viverra.`
  },
  {
    avatar: AVATAR3,
    name: 'Nana Ama McBrown',
    review: `Molestie at elementum eu facilisis sed odio morbi quis commodo. Tristique nulla aliquet enim tortor.
    Sed sed risus pretium quam vulputate dignissim suspendisse. Laoreet id donec ultrices tincidunt arcu. 
    Malesuada proin libero nunc consequat interdum varius sit amet mattis. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. 
    Ornare massa eget egestas purus viverra.`
  },
  {
    avatar: AVATAR4,
    name: 'Tina Show',
    review: `Molestie at elementum eu facilisis sed odio morbi quis commodo. Tristique nulla aliquet enim tortor.
    Sed sed risus pretium quam vulputate dignissim suspendisse. Laoreet id donec ultrices tincidunt arcu. 
    Malesuada proin libero nunc consequat interdum varius sit amet mattis. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. 
    Ornare massa eget egestas purus viverra.`
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Client</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review}, index) => {
            return (
              <SwiperSlide className='testimonial' key={index}>
                <div className='client__avatar'>
                  <img src={avatar} alt='avatar'/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials