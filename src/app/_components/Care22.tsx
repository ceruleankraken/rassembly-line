"use client"

import Link from 'next/link'
import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Care() {

  const settings = {
    dots          : true,
    infinite      : true,
    speed         : 500,
    slidesToShow  : 1,
    slidesToScroll: 1,
    accessibility : true,
  };
  
  return (
    <>
      <Box
        sx={{
          // backgroundColor: 'black',
          // zIndex: -10,
          width : '100%',
          px    : 3,
          height: 200,
        }}
      >
        {/* <div className="slider-container"> */}
          <Slider {...settings}>
            <div>
              <Box sx={{
                height         : '200px',
                backgroundColor: '#EB511E',
              }} />
            </div>
            <div>
              <Box sx={{
                height         : '200px',
                backgroundColor: '#4F7CAC',
              }} />
            </div>
            <div>
              <Box sx={{
                height         : '200px',
                backgroundColor: '#EA7E1F',
              }} />
            </div>
            <div>
              <Box sx={{
                height         : '200px',
                backgroundColor: '#729781',
              }} />
            </div>
            <div>
              <Box sx={{
                height         : '200px',
                backgroundColor: '#087E8B',
              }} />
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        {/* </div> */}
      </Box>
    </>
  )
}