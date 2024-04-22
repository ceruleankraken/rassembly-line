'use client'

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

export default function CardFaceComponent() {

  return (
    <>
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
      </Card>
    </>
  )
}