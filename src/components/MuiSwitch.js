import React from 'react'
import { Box,Switch,FormControlLabel } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';

export default function MuiSwitch() {
    const [checked,setChecked]=useState(false);
    console.log({checked})
    const handleChange=(e)=>{
        
        setChecked(e.target.checked);

    }
    useEffect(()=>{
        if(checked===false)
        {
            document.getElementById("hello").style.color="black";
        }
        else
        {
            document.getElementById("hello").style.color="green";
        }
    },[checked])
  return (
   <Box>
    <div id='hello' style={{width:"50px"}} >
    <h1>hello world</h1>
    </div>
    <FormControlLabel  label="dark-mode" control={<Switch checked={checked} onChange={handleChange}  />}  />

    
   </Box>
  )
}
