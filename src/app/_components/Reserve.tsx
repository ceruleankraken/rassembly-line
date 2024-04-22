"use client"

import Link from 'next/link'
import React from 'react'
import { Box, Button, Chip, Divider, Grid, Stack, Typography } from '@mui/material'

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import 'moment/locale/id';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

export default function Reserve() {

  return (
    <>
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
        <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="id">
          <DatePicker />
        </LocalizationProvider>
      </Box>

      <Divider />
    </>
  )
}