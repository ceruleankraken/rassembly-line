// 'use client';
import { AppBar, Box, Button, IconButton, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import ElevationScroll from "./Scroll";


// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   // window?: () => Window;
//   children: React.ReactElement;
// }

// function ElevationScroll(props: Props) {

//   const { children } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

const TopBarComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
  )
}

export default TopBarComponent;