import React, { useState } from 'react'
import { Box ,TextField,MenuItem} from '@mui/material'
export default function MuiSelect() {
const [country,setCountry]=useState("");
console.log({country})
const handler=(e)=>{
    const value=e.targe.value;
    setCountry(value)
   
}
  return (
   <Box >

<TextField label='select Country' value={country} select  style={{width:"150px"}} onChange={handler} >
<MenuItem value='usa'>USA</MenuItem>
<MenuItem value='india'>India</MenuItem>
<MenuItem value='china'>China</MenuItem>
</TextField>

   </Box>
  )
}
