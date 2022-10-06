import React from 'react'
import { Skeleton,Box, Button} from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react';
export default function MuiSkeleton() {
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    })
  return (
   
    <Box width={250} style={{marginTop:'20px'}}>
    {
        loading ? <Skeleton variant='rectangular' width={256} height={144} animation='wave' /> : <img src='https://images.unsplash.com/photo-1664915933754-5d24b1e81432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60' alt='imag'  width={256} height={144} />
    }
    <Button></Button>
    </Box>
  )
}
