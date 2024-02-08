'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from "swiper/modules"
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './styles.css'

// import required modules
import Image from 'next/image'
import { apressetation } from '@/mock/apressetation'

export default function CompontsVideo() {
  return (
    <>
      <div className="relative">
        <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center">
        </div>
        <Swiper
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {apressetation.map((IMG, Index) => (
            <SwiperSlide
              key={IMG.id}
              className="!z-0 !max-w-full !h-[695px] object-cover text-white max-lg:!h-[495px] max-md:!h-[300px] max-sm:!h-screen"
            >
              <Image src={IMG.dir} alt=""/>
              <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen'>
              <h2 className="font_montserrat text-3xl font-bold text-whiteColor max-lg:text-3xl max-md:text-2xl max-sm:text-3xl mx-1">
               {IMG.text}
              </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
