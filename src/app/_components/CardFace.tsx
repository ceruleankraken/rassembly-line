'use client'

import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

export default function CardFaceComponent({bgcolor, text}: any) {

  return (
    <>
      <Box
        sx={{ 
          width          : '100%',
          height         : '200px',
          backgroundColor: bgcolor,
        }}
      >
        <Typography paddingTop={20} textAlign={"center"} variant="h5" component="div">
          {text}
        </Typography>
        
      </Box>
{/* 
      <Card sx={{ maxWidth: 345 }}>
        <CardContent
          sx={{ 
            height         : 140,
            width          : 200,
            backgroundColor: '#729781'
          }}
        >
          <Typography paddingTop={10} textAlign={"center"} variant="h5" component="div">
            Lizard
          </Typography>
        </CardContent>
      </Card> */}
    </>
  )
}