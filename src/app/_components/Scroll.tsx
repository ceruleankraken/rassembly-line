'use client';
import { AppBar, Box, Button, IconButton, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import theme from "../_lib/theme";



interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  // window?: () => Window;
  children: React.ReactElement;
}

export default function ElevationScroll(props: Props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor            : trigger ? '#EC5828': "transparent",
      color                      : trigger ? "white"  : "black",
      transition                 : trigger ? "0.3s"   : "0.5s",
      height                     : '48px',
      '@media (minWidth: 780px)': {
        height: '52px'
      }
      // maxHeight      : '48px'
      // boxShadow      : "none",
      // padding        : "10px 0px",
      // backdropFilter : "blur(20px)",
      // boxShadow      : '0px 2px 3px rgba(0, 0, 0, 0.125)',
    },    
  });
}