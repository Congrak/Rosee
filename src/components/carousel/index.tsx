"use client";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import "./styles.css";

import Image from "next/image";
import { galerieList } from '@/contants';

export const Carousel = () => {
  return (
    <div className="container">
      <h1>NUESTROS TRABAJOS</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        initialSlide={3}
        className="mySwiper"
      >
        {galerieList.map((item) => (
          <SwiperSlide key={item}>
            <Image
              src={item}
              alt={item}
              width={300}
              height={300}
              layout="responsive"
              className="image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
