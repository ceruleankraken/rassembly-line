'use client';

import Image from "next/image";
import styles from "./page.module.css";

import TopBarComponent from "./_components/Navbar";
import Header from "./_components/Header";

import { ThemeProvider } from "@emotion/react";
import theme from "./_lib/theme";
import Care from "./_components/Care";
import { Box } from "@mui/material";
import Feature from "./_components/Feature";
import CompanyProfile from "./_components/CompanyProfile";
import Reserve from "./_components/Reserve";


export default function Home() {
  return (
    
    <ThemeProvider theme={theme}>
      <TopBarComponent />
      <Header />
      <Care />
      <CompanyProfile />
      <Feature />
      <Reserve />
      <Box
        sx= {{
          height:'200px',
        }}
      />
    </ThemeProvider>
  );
}
