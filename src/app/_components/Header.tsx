"use client"

import Link from 'next/link'
import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import theme from '../_lib/theme';

const bgImage = {
    backgroundImage: "url('/media/dentist-operation.jpg')"
}

export default function Header() {
    return (
      <>
      <Box
        sx={{
          py                  : 12,
          position            : 'relative',
          zIndex              : 10,
          backgroundImage     : "url('/media/dentist-operation.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition  : "top",
          backgroundRepeat    : "no-repeat",
          backgroundSize      : "cover",
        }}
      >
          
        <Box
          sx={{
            position: 'absolute',
            backgroundColor: 'black',
            zIndex: -10,
            // width: '100%',
            // height: 200,
          }}
        >
        </Box>
        <Box
          sx={{
            alignItems: "center",
            zIndex: 10,
            color: '#000000',
            pt:2,
            pb:2,
          }}
        >
          <Box
            sx={{
              display       : "flex",
              justifyContent: "center",
              flexDirection : 'column',
              pl            : 2,
            }}
          >
            <Typography
              variant    = "h2"
              fontWeight = {600}
              color      = {'white'}
            >
              A Dental Practice 
            </Typography>
            <Typography
              variant    = "h2"
              fontWeight = {600}
              sx         = {{
                fontFamily          : 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
                background          : 'linear-gradient(to right, #FFFFFF, #ff6b08, #cf23cf, #eedd44)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor : 'transparent'
              }}
            >
              Designed
            </Typography>
            <Typography
              variant    = "h2"
              fontWeight = {600}
              color      = {'whitesmoke'}
            >
               with You in Mind. Finally.
            </Typography>
            <Typography variant='h6'>
              YOUR SMILE STARTS HERE
            </Typography>
            <Box sx={{
              justifyContent: 'center',
              [theme.breakpoints.up('sm')]: {
                justifyContent: 'start',
              },
            }}> 

            </Box>
            <Link href={'/book-appointment'}>
              <Button variant='contained'>
                  Book Free Consult
              </Button>
            </Link>
          </Box>
          
        </Box>

      </Box>

     
        {/* <div style={bgImage} className='relative z-10 bg-top bg-cover bg-fixed bg-no-repeat grid grid-cols-1 lg:grid-cols-2 pt-32 lg:pt-44'>
            <div className="absolute bg-black/40 inset-0 -z-10"></div>
            <div className="z-10 grid items-center px-mobilex md:px-normalx text-white pt-[5rem] pb-[3rem] lg:pb-[8rem]">
                <div className="flex flex-col justify-center lg:justify-start text-center lg:text-left gap-8 md:gap-5">
                    <h1 className='font-merry font-semibold text-4xl md:text-5xl'>
                        A Dental Practice Designed with You in Mind. Finally.
                    </h1>
                    <p className='text-lg md:text-xl'>YOUR SMILE STARTS HERE</p>
                    <div className="flex justify-center lg:justify-start relative">
                        <Link href={'/book-appointment'}>
                            <Button>
                                Book Free Consult
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-end overflow-hidden relative px-mobilex md:px-normalx lg:px-0">
            </div>
        </div> */}
      </>
    )
}