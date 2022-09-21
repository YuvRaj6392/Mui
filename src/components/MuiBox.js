import React from 'react'
import { Box } from '@mui/material'
export default function MuiBox() {
  return (
    <Box  sx={{backgroundColor:"primary.main",height:"100px",'&:hover':{
        backgroundColor:"primary.light"
    }}}>
        Code Evolution
    </Box>
  )
}
