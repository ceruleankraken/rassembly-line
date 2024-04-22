"use client"

import Link from 'next/link'
import OnePiece from '~media/onepiece.jpeg';
import React from 'react'
import { Box, Button, Chip, Divider, Grid, Stack, Typography } from '@mui/material'
import CardComponent from './Card'
import CardFaceComponent from './CardFace'
import CardSmall from './CardSmall'

export default function CompanyProfile() {

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
        <Stack
          mt         = {5}
          width      = {'100%'}
          alignItems = "center"
          sx         = {{
            display       : 'flex',
            flexDirection : 'row',
            justifyContent: 'center',
          }}
        >
          <Box
             width         = {'50%'}
             display       = {'flex'}
             flexDirection = {'row-reverse'}
          >
            <Box
              component    = "img"
              src          = {'/media/onepiece.jpeg'}
              width        = {"50%"}
              p            = {1.2}
              ml           = {5}
              mr           = {2}
              bgcolor      = {"#FFFFFF"}
              borderRadius = {5}
            />
          </Box>
          <Box
             width         = {'50%'}
             display       = {'flex'}
             flexDirection = {'row'}
          >
            <Box
              // // alignItems = "center"
              ml = {2}
              mr = {5}
              px = {1}
              sx = {{
                display       : 'flex',
                flexDirection : 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h4" mt={2} mb={1} align="left">
                <b>company</b>
              </Typography>
              <Typography
                variant = "body1"
                color   = "text"
                align   = "justify"
                // style   = {{ wordWrap: "break-word" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Box>
          </Box>
        </Stack>

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
    </>
  )
}