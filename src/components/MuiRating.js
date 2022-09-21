import React from 'react'
import { Stack,Rating } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react'
export default function MuiRating() {
    const [rating,setRating]=useState("");
    const [count,setCount]=useState(0);
    const onHandleChange=(e)=>{
        setRating(e.target.value)
        setCount(count+1);
        console.log(count)
    }
  return (
    <Stack spacing={2}>
    <Rating value={rating} onChange={onHandleChange}  icon={<FavoriteIcon font-size="inherit" color="error"  />} 
    
     />
    </Stack>
  )
}
