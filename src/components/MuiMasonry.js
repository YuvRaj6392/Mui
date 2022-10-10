import React from 'react'
import { Box , Paper} from '@mui/material'
import { Masonry } from '@mui/lab'

export default function MuiMasonry() {
    const height=[150, 39,90,70,50,30,50,90,70]
  return (
    <Box sx={{width:500, minHeight:400}}>
    <Masonry columns={4} spacing={1}>
    {
        height.map((height,index)=>(
            <Paper key={index} sx={{display:'flex',justifyContent:'center',alignItems:'center',height,border:'1px solid'}}>
            {index+1}
            </Paper>
        ))
    }
    </Masonry>
    </Box>
  )
}
