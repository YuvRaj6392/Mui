import React, { useState } from 'react'
import { Box ,TextField,MenuItem} from '@mui/material'
export default function MuiSelect2() {
    const [country,setCountry]=useState("")
    console.log(country)
  return (
    <div>
      <TextField label="Select Country" value={country} onChange={e=>setCountry(e.target.value)}  select fullWidth>
      
      <MenuItem value='usa'>USA</MenuItem>
<MenuItem value='india'>India</MenuItem>
<MenuItem value='china'>China</MenuItem>
      </TextField>
    </div>
  )
}
