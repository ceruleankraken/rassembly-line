"use client"

import Link from 'next/link'
import React from 'react'
import { Box, Button, Chip, Divider, Grid, Stack, Typography } from '@mui/material'
import CardComponent from './Card'
import CardFaceComponent from './CardFace'
import CardSmall from './CardSmall'

export default function Feature() {

  return (
    <>
      <Box
        sx={{
          // backgroundColor: 'black',
          // zIndex: -10,
          // width       : '100%',
          mb            : 3,
          display       : 'flex',
          justifyContent: 'center',
          alignItems    : 'center',
          // margin        : 13,
          // height        : 200,
          borderRadius  : 10,
        }}
      >
        <Grid
          container
          width          = {'100%'}
          // flexDirection  = {"row"}
          // gap            = {1}
          justifyContent = {'space-evenly'}
          flexWrap       = {'wrap'}
        >
          <Grid item xs={12} sm={6} md={3}><CardFaceComponent text={'Satu'} bgcolor={'#729781'}/></Grid>
          <Grid item xs={12} sm={6} md={3}><CardFaceComponent text={'Dua'} bgcolor={'#FFBD00'}/></Grid>
          <Grid item xs={12} sm={6} md={3}><CardFaceComponent text={'Tiga'} bgcolor={'#247BA0'}/></Grid>
          <Grid item xs={12} sm={6} md={3}><CardFaceComponent text={'Empat'} bgcolor={'#EA7E1F'}/></Grid>
        </Grid>
      </Box>

      <Divider>
          <Typography
              variant    = "h4"
              fontWeight = {600}
              color      = {'black'}
            >
              service
            </Typography>
      </Divider>

      <Box
        sx={{
          // backgroundColor: 'black',
          // zIndex: -10,
          // width       : '100%',
          my            : 3,  
          display       : 'flex',
          justifyContent: 'center',
          alignItems    : 'center',
          // margin        : 13,
          // height        : 200,
          borderRadius  : 10,
        }}
      >

        <Stack
          width          = {'100%'}
          flexDirection  = {"row"}
          gap            = {1}
          justifyContent = {'space-evenly'}
        >
          <CardSmall />
          <CardSmall />
          <CardSmall />
          <CardSmall />
          {/* <CardComponent />
          <CardComponent />
          <CardComponent /> */}
        </Stack>
      </Box>

      <Divider>
          <Typography
              variant    = "h4"
              fontWeight = {600}
              color      = {'black'}
            >
              meet
            </Typography>
      </Divider>

    </>
  )
}