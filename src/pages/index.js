import * as React from "react"

import { Box, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import theme from 'util/theme';
import ToiletList from "components/ToiletList"
import Navbar from "components/Navbar"


const IndexPage = () => {
  return (
    <ThemeProvider theme={theme} sx={{fontFamily: "Roboto"}}>
      <Navbar/>
      <Box
        sx={{
          width: 'auto',
          height: {xs: 100, md: 150, lg: 200}
        }}
      ></Box>
      <Container
      maxWidth="md"
      >
        <ToiletList/>
      </Container>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
