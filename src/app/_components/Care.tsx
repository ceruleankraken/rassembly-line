"use client"

import Link from 'next/link'
import React from 'react'
import { Box, Button, Typography } from '@mui/material'

// Import Swiper React components

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import swiperStyle from '../swiper.module.css';

export default function Care() {

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'black',
          // zIndex: -10,
          // width       : '100%',

          margin      : 3,
          height      : 200,
          borderRadius: 10,
        }}
      >
        <Swiper  
          // navigation
          className     = {swiperStyle.swiperContainer}
          modules       = {[Navigation, Pagination, Autoplay]}
          slidesPerView = {1}
          loop          = {true}
          pagination    = {{ clickable: true }}
          // onSlideChange = {() => console.log('slide change')}
          // onSwiper      = {(swiper) => console.log(swiper)}
          autoplay={{
            delay               : 2500,
            pauseOnMouseEnter   : true,
            disableOnInteraction: false,
          }}
          // spaceBetween  = {0}
        >
          <SwiperSlide>
            <Box sx={{
              height         : '200px',
              backgroundColor: '#EB511E',
            }} />
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{
              height         : '200px',
              backgroundColor: '#087E8B',
            }} />
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{
              height         : '200px',
              backgroundColor: '#EA7E1F',
            }} />
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{
              height         : '200px',
              backgroundColor: '#729781',
            }} />
          </SwiperSlide>
        </Swiper>
        {/* </div> */}
      </Box>
    </>
  )
}