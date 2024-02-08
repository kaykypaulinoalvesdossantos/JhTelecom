"use client"
import vip from "@/../public/img/Vip.png"
import niu from "@/../public/img/Niu.png"
import giga from "@/../public/img/giga.png"

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";

import "./styles.css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

export default function SwiperLogos() {

  const breakpoints = {
    // Configurações do Swiper para diferentes breakpoints
    320: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  };


  return (
      <>
      <div className="bg-[#1C3363] flex flex-col items-center gap-20 py-20">
        <h3 className="text-5xl font-montserrat font-bold max-md:text-center max-md:text-3xl text-white">Empresas parceiras</h3>
        <Swiper 
        spaceBetween={30}
        breakpoints={breakpoints}
        slidesPerView={6}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper ">
          <SwiperSlide>
            <Image src={vip} alt={""} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={niu} alt={""}/>
          </SwiperSlide>
          <SwiperSlide >
            <Image src={giga} alt={""}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={vip} alt={""}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={niu} alt={""}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={giga} alt={""}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={vip} alt={""}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={niu} alt={""}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={giga} alt={""}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={vip} alt={""}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={niu} alt={""}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={giga} alt={""}/>
          </SwiperSlide>

        </Swiper>
          </div>
      </>
    );
  }
  